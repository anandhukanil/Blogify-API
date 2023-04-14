import { Schema } from "mongoose";
import { IPosts } from "../types";
import userSchema from "./userSchema";
import commentSchema from "./commentSchema";


const postSchema = new Schema<IPosts>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  authorId: { type: String, required: true },
  author: userSchema,
  comments: commentSchema,
  date: Date,
  image: String,
  isPublished: Boolean,
  tags: [{ type: String }],
  meta: { 
    views: Number,
    likes: Number,
    shares: Number,
  }
});

postSchema.index({ title: "text", tags: "text", content: "text" });

export default postSchema;