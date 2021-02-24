import { Router } from "express";
import { addUser } from "../controller/userController.js";
import { requireAuth, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addUser").post(requireAuth,isAdmin,addUser);
// router.route("/addUser/:id").delete(requireAuth,isAdmin,deleteUser);
//list all user
//get a user
// delete a user

export default router;