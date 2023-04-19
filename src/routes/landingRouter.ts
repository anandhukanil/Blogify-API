import { Router } from "express";
import { getDocsPageController, getLandingPageController, registrationController } from "../controllers/landingController";

const router = Router();

// get all blog posts
router.get("/", getLandingPageController);

// create a new blog post
router.get("/docs", getDocsPageController);

// register for an api key
router.post("/register", registrationController);

export default router;