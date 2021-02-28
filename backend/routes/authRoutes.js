import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controller/authController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import rateLimiter from 'express-rate-limit'

const router = Router();

const loginFailedLimiter= rateLimiter({
    windowMs: 30 * 60 * 1000, // 1 hour window
    max: 4, // start blocking after 5 requests
    message:
      "Too many login attempt from this IP, please try again after an hour"
})

router.route("/register/:id/:token").post(registerUser);
router.route("/login").post(loginFailedLimiter,loginUser);
router.route("/logout").delete(requireAuth, logoutUser);

router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:id/:token").post(resetPassword);

export default router;
