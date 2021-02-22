import User from "../model/User.js";
import { createAccessToken, decodeAccessToken } from "../utils/jwtToken.js";
import { registerSchema, loginSchema } from "../utils/validation.js";

const registerUser = async (req, res, next) => {
  try {
    const result = await registerSchema.validateAsync({ ...req.body });
    const { email, name, password } = result;
    const userDoesExist = await User.findOne({ email });
    if (userDoesExist) {
      res.status(401);
      throw new Error("Another user already exist with this email ");
      return;
    }
    const user = await User.create({ name, email, password });
    const accessToken = await createAccessToken(
      user._id,
      user.email,
      user.role
    );
    const decodedToken = await decodeAccessToken(accessToken);
    const { exp } = decodedToken;
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      maxAge: 30 * 60 * 1000,
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
    const { email, password } = result
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
      const decodedToken = await decodeAccessToken(accessToken);
      const { exp } = decodedToken;
      res.cookie("jwt", accessToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
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

const addUser=(req,res,next)=>{
  try {
    
  } catch (err) {
    
  }
}

export { registerUser, loginUser };
