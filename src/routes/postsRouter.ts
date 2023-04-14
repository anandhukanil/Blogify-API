import { Router } from "express";
import { getAllPostsController, getPostController } from "../controllers/postsController";

const router = Router();

// get all blog posts
router.get("/", getAllPostsController);

// create a new blog post
router.post("/", getAllPostsController);

// get a single blog post by id
router.get("/:id", getPostController);

// update a blog post by id
router.put("/:id", getAllPostsController);

// delete a blog post by id
router.delete("/:id", getAllPostsController);

// search blog posts by title, tags, or content
router.get("/search", getAllPostsController);

// sort blog posts by date, title, or author
router.get("/sort", getAllPostsController);

// paginate blog posts
router.get("/paginate", getAllPostsController);

export default router;