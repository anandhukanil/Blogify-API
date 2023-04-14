import { model } from "mongoose";
import { Models } from "../types";
import commentSchema from "../schemas/commentSchema";


const CommentModel = model(Models.Comment, commentSchema);

export default CommentModel;