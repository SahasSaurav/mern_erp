import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controller/authController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/register/:id/:token").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").delete(requireAuth, logoutUser);

router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:id/:token").post(resetPassword);

export default router;
