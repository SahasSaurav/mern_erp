import jwt from "jsonwebtoken";
import User from "../model/User.js";

const requireAuth = async (req, res, next) => {
  try {
    let bearerToken =req.headers.authorization ;
    if(!bearerToken){
      res.status(401)
      throw new Error('Unauthorized')
      return ;
    }
    console.log('hello')
    console.log(bearerToken)
   if(bearerToken && bearerToken.startsWith('Bearer')){
    const token=bearerToken.split(' ')[1]
    const decodedId= jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, payload) => {
        if (err) {
          const message =
            err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
          res.status(403);
          throw new Error(message);
        }
        return payload.sub;
      }
    );
    req.user = await User.findById({_id:decodedId.toString()}).select(
      "-password -createdAt -updatedAt"
    );
    next()
   }
  } catch (err) {
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      res.status(403);
      throw new Error("Not authorized as an admin");
    }
  } catch (err) {
    next(err);
  }
};

export { requireAuth, isAdmin };
