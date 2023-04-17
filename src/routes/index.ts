import { Router } from "express";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";
import userRouter from "./userRouter";

const router = Router();

router.get("/", (req, res) => res.status(200).send({ data: "Hello World!" }));

// router for handling requests for blog posts
router.use("/api/posts", postRouter);

// router for handling requests for blog post comments
router.use("/api/comments", commentRouter);

// router for handling requests for blog users
router.use("/api/users", userRouter);

export default router;