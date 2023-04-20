import { Router } from "express";
import authenticationMiddleware from "../middlewares/auth";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";
import userRouter from "./userRouter";
import landingRouter from "./landingRouter";

const router = Router();

// router for handling requests for views
router.use("/", landingRouter);

router.use(authenticationMiddleware);

// router for handling requests for blog posts
router.use("/api/posts", postRouter);

// router for handling requests for blog post comments
router.use("/api/comments", commentRouter);

// router for handling requests for blog users
router.use("/api/users", userRouter);

export default router;