import { Router } from "express";
import rateLimiter from 'express-rate-limit'
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  refreshAccesToken,
} from "../controller/authController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();


//middleware limit attempts upto 4 when user login with wrong user's crendentials
const loginFailedLimiter=rateLimiter({
  windowMs: 30 * 60 * 1000, // 30 min  window
  max: 4, // start blocking after 5 requests
  message:{
    success: false,
    status: 429,
    message:"Too many login attempt from this IP, please try again after an 30 min",
  }
})


router.route("/register/:id/:token").post(registerUser);
router.route("/login").post(loginFailedLimiter,loginUser);
router.route("/logout").delete(requireAuth, logoutUser);
router.route('/refresh').post(refreshAccesToken)

router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:id/:token").post(resetPassword);

export default router;
