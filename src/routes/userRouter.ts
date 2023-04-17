import { Router } from "express";
import { 
  createUserController, deleteUserController, getAllUsersController,
  getUserController, updateUserController
} from "../controllers/userController";

const router = Router();

// get all users
router.get("/", getAllUsersController);

// create a new user
router.post("/", createUserController);

// get a user by id
router.get("/:id", getUserController);

// update a user by id
router.put("/:id", updateUserController);

// delete a user by id
router.delete("/:id", deleteUserController);

export default router;