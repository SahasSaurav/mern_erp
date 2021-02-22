import { Router } from "express";
import { loginUser } from "../controller/authController.js";

const router = Router();

// router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// router.route("/forgot_password").post();
// router.route("/reset-password/:id/:token").post();

export default router;
