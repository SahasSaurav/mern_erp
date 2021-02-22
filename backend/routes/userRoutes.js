import { Router } from "express";
import { addUser } from "../controller/userController.js";
import { requireAuth, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addUser").post(addUser);
// router.route("/forgot_password").post();
// router.route("/reset-password/:id/:token").post();

export default router;