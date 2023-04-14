import { model } from "mongoose";
import { Models } from "../types";
import postSchema from "../schemas/postSchema";


const PostModel = model(Models.Post, postSchema);

export default PostModel;