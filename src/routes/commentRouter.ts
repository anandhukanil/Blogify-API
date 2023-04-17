import { Router } from "express";
import { 
  createCommentController, deleteCommentController, getAllCommentsController,
  getCommentController, updateCommentController
} from "../controllers/commentController";

const router = Router();

// get all comments
router.get("/", getAllCommentsController);

// create a new comment
router.post("/", createCommentController);

// get a comment by id
router.get("/:id", getCommentController);

// update a comment by id
router.put("/:id", updateCommentController);

// delete a comment by id
router.delete("/:id", deleteCommentController);

export default router;