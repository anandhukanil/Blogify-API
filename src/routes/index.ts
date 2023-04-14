import { Router } from "express";
import postsRouter from "./postsRouter";

const router = Router();

router.get("/", (req, res) => res.status(200).send({ data: "Hello World!" }));

// router for handling requests for blog posts
router.use("/api/posts", postsRouter);

export default router;