import jwt from "jsonwebtoken";
import User from "../model/User.js";

const requireAuth = async (req, res, next) => {
  try {
    let bearerToken =req.headers.authorization ;
    // check whether access  token present in in authorization headers and refresh token present in cookie 
    if(!bearerToken || !req.cookies.token){
      res.status(401)
      throw new Error('Unauthorized')
      return ;
    }
    //check whether bearer token is present and start with the Bearer
   if(bearerToken && bearerToken.startsWith('Bearer')){

    // spliting the bearer token to get access token
    const token=bearerToken.split(' ')[1]
    //decoding the access token to get the user id from token 
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
    // setting the details of user in the req object
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
    // check whether user is present in req object and role of user is admin or not
    if (req.user && req.user.role === "admin") {
      // admin then allow access
      next();
    } else {
      // not admin don't allow  access 
      res.status(403);
      throw new Error("Not authorized as an admin");
    }
  } catch (err) {
    next(err);
  }
};

export { requireAuth, isAdmin };
