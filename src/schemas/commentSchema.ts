import { Schema } from "mongoose";
import { IComment } from "../types";
import userSchema from "./userSchema";

const commentSchema = new Schema<IComment>({
  postId: { type: String, required: true },
  authorId: { type: String, required: true },
  content: { type: String, required: true },
  date: Date,
  author: userSchema,
});

export default commentSchema;