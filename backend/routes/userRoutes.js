import { Router } from "express";
import { addUser } from "../controller/userController.js";
import { requireAuth, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addUser").post(addUser);

export default router;