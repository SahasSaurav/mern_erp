import { Router } from "express";
import {
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controller/authController.js";

const router = Router();

// router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/login").delete(logoutUser);

router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:id/:token").post(resetPassword);

export default router;
