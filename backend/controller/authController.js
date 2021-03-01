import crypto from 'crypto';
import User from "../model/User.js";
import {
  createAccessToken,
  createRefreshToken,
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
     // validate the incoming request  from form
    const result = await registerSchema.validateAsync({ ...req.body });
    const { email, password, repeatPassword } = result;
    //check whether the user exist or not from id(req.params.id)
    const isUserExist = await User.findById({ _id: id }).select('+password');
    // if user dooesn't exist then throw the error
    if ((id !== isUserExist._id) && (email!==isUserExist.email)) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    // if user exist then  decode the token sign in token
    const payload = await verifyToken(
      token,
      process.env.SIGNIN_TOKEN_SECRET,
      isUserExist.password
    );
    // find the user using id from sign in token
    const user = await User.findOne({
      _id: payload.sub,
      email: payload.email,
    });
    // if user available then again  reset the password  else throw the error 
    if (user) {
      user.password = password;
      await user.save();
      res.status(201);
      res.json({ message: "Sucsessfully changed the password" });
    }
    else {
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
    // validate the incoming request from form
    const result = await loginSchema.validateAsync({ ...req.body });
    const { email, password } = result;
    // find the user from email
    const user = await User.findOne({ email }).select('+password');
    //if user is not available in db then throw error user is not registered
    if (!user) {
      res.status(400);
      throw new Error("User is not registered");
    }
    // check the password whether match entered password in form with password stored in the db 
    const isMatch = await user.isValidPassword(password,user.password);
    // if user avaiable and password match then give login access
    if (user && isMatch) {
      // create access token 
      const accessToken = await createAccessToken(
        user._id,
        user.email,
        user.role
      );
      // create refresh token 
      const refreshToken=await createRefreshToken(user._id)
      //save the refresh token to db for blacklist the refresh token
      user.refreshToken= refreshToken
      await user.save() 
      // decode the acces token to send expiry time to the client
      const decodedAccessToken = await decodeToken(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );
      const { exp } = decodedAccessToken;
      // send the http only to the client
      res.cookie("token", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        sameSite:'strict',
        secure: process.env.NODE_ENV==='production'?true:false, 
      });
      // send the json to the client information containing about user
      res.json({
        userInfo: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken,
        refreshToken,
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
    // delete refresh token from httpOnly cookie
    res.cookie("token", "", { httpOnly: true, maxAge: 1 });
    // remove the refresh token from db
    const user= await User.findByIdAndUpdate(req.user.id,{refreshToken:null})
    res.json({message:'user logout'})
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
     // validate the incoming request from form
    const result = await forgotPasswordSchema.validateAsync({ ...req.body });
    const { email } = result;
    // find the user by email id
    const user = await User.findOne({ email }).select('+password');
    //if user is not available in then send error 
    if (!user) {
      res.status(400);
      throw new Error("User is not registered");
      return;
    }
    // create the forgot password token
    const token = await createForgotPasswordToken(user);
    //create the reset password link
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
    //check user req.param id matches with id stored in db
    if (id !== isUserExist.id) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    // decode the forgot password token 
    const payload = await verifyToken(
      token,
      process.env.FORGOT_PASSWORD_TOKEN_SECRET,
      isUserExist.password
    );
    //find the user from  db with decoded reset token 
    const user = await User.findOne({
      _id: payload.sub,
      email: payload.email,
    });
    // if user is available in db then reset the password 
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

const refreshAccesToken=async(req,res,next)=>{
  try {
    const refreshToken=req.cookies.token
    if(!refreshToken){
      res.status(401)
      throw new Error('Unauthenicated')
      return
    }
    // decode the refresh token
    const decodedRefreshToken=await decodeToken(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    const {exp,sub,email,role}=decodedRefreshToken;
    //encrypting the refresh token
    const encryptedRefreshToken=crypto.createHash('sha256').update(refreshToken)
    // find the user from id and refesh token
    const user=await User.findOne({
      _id:sub,
      refreshToken:encryptedRefreshToken
    }).select('-pass')
    // check the encrypted refresh token match with refresh token of user present in the db
    // as crypto module doesnot have the built comapre function to match input with encrypted field
    const refreshTokenMatch= encryptedRefreshToken === user.refreshToken ;
      console.log({refreshTokenMatch})
    // blacklist the refresh token which is not present in the db
     if(!user || !refreshTokenMatch){
      res.status(401)
      throw new Error('Unauthorized bitch')
     }
    // check whether token is expiried or not
    const refreshTokenExpired= new Date().getTime()/1000 < exp
    if(refreshTokenExpired){
      //then create the access token 
      const newAccessToken= await createAccessToken(
        sub,
        email,
        role
      );
      const newRefreshToken= await createRefreshToken(sub); 
      //send it to the client
      const decodedNewAccessToken= await decodeToken(newAccessToken,process.env.ACCESS_TOKEN_SECRET)
      res.json({
        userInfo:{
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken:newAccessToken,
        expiresAt:decodedNewAccessToken.exp,
        refreshToken:newRefreshToken,
      })
    }else{
      res.status(401)
      throw new Error('Unauthorized, token expired')
    }
  } catch (err) {
    next(err)
  }
}

export { registerUser, loginUser, logoutUser, forgotPassword, resetPassword,refreshAccesToken };
