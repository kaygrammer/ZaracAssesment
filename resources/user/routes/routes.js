import express from "express";
import UserController from "../controllers/user.controllers.js";

const router = express.Router();
const userController = new UserController();

router.post("/", userController.createUser);
router.get("/all", userController.getAllUsers);
router.get("/:identifier", userController.getUserByIdentifier);
router.put("/:id", userController.updateUserById);
router.delete("/:identifier", userController.deleteUserByIdentifier);

export default router;
