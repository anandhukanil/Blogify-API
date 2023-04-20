import { Router } from "express";
import {
  createPostController, deletePostController, getAllPostsController,
  getPostController, searchPostsController, updatePostController
} from "../controllers/postController";

const router = Router();

// get all blog posts
router.get("/", getAllPostsController);

// create a new blog post
router.post("/", createPostController);

// get a single blog post by id
router.get("/:id", getPostController);

// update a blog post by id
router.put("/:id", updatePostController);

// delete a blog post by id
router.delete("/:id", deletePostController);

// search blog posts by title, tags, or content
router.get("/search", searchPostsController);

export default router;