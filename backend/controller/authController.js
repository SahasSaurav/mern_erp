import User from "../model/User.js";
import {
  createAccessToken,
  createForgotPasswordToken,
  decodeToken,
  verifyToken,
} from "../utils/jwtToken.js";
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../utils/validation.js";

const registerUser = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const result = await registerSchema.validateAsync({ ...req.body });
    const { email, password, repeatPassword } = result;
    const isUserExist = await User.findById({ _id: id });
    if ((id !== isUserExist._id) && (email!==isUserExist.email)) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    const payload = await verifyToken(
      token,
      process.env.SIGNIN_TOKEN_SECRET,
      isUserExist.password
    );
    const user = await User.findOne({
      _id: payload.sub,
      email: payload.email,
    });
    if (user) {
      user.password = password;
      await user.save();
      res.status(201);
      res.json({ message: "Sucsessfully changed the password" });
    } else {
      res.status(401);
      throw new Error("UnAuthorized");
    }
  } catch (err) {
    if (err.isJoi === true) {
      res.status(422); //Unprocessable Entity  error code 422
    }
    console.log(err);
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const result = await loginSchema.validateAsync({ ...req.body });
    const { email, password } = result;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("User is not registered");
    }
    const isMatch = await user.isValidPassword(password);

    if (user && isMatch) {
      const accessToken = await createAccessToken(
        user._id,
        user.email,
        user.role
      );
      const decodedAccessToken = await decodeToken(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      const { exp } = decodedAccessToken;
      res.cookie("token", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        sameSite:'strict',
        //secure: true, / / uncomment it when ssl certificate is done
      });
      res.json({
        userInfo: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken,
        expiresAt: exp,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user credentials");
    }
  } catch (err) {
    if (err.isJoi === true) res.status(400);
    next(err);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.cookie("token", "", { httpOnly: true, maxAge: 1 });
    res.json({message:'user logout'})
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const result = await forgotPasswordSchema.validateAsync({ ...req.body });
    const { email } = result;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("User is not registered");
      return;
    }
    const token = await createForgotPasswordToken(user);
    const resetPasswordLink = `${req.protocol}://${req.get(
      "host"
    )}/auth/reset-password/${user.id.toString()}/${token}`;
    console.log({ resetPasswordLink });
    //send email to user with resetPasswordLink
    res.json({
      message: "'Password reset link has been sent to your email",
    });
  } catch (err) {
    if (err.isJoi === true) res.status(400);
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const result = await resetPasswordSchema.validateAsync({ ...req.body });
    const { password, repeatPassword } = result;
    const isUserExist = await User.findById({ _id: id });
    if (id !== isUserExist.id) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    const payload = await verifyToken(
      token,
      process.env.FORGOT_PASSWORD_TOKEN_SECRET,
      isUserExist.password
    );
    console.log({ payload });
    const user = await User.findOne({
      _id: payload.sub,
      email: payload.email,
    });
    if (user) {
      user.password = password;
      await user.save();
      res.status(201);
      res.json({ message: "Sucsessfully changed the password" });
    } else {
      res.status(401);
      throw new Error("unAuthorized");
    }
  } catch (err) {
    if (err.isJoi === true) res.status(400);
    next(err);
  }
};

export { registerUser, loginUser, logoutUser, forgotPassword, resetPassword };
