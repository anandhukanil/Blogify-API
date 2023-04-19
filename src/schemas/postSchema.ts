import { Schema } from "mongoose";
import { IPost } from "../types";
import userSchema from "./userSchema";


const postSchema = new Schema<IPost>({
  title: { type: String, required: [true, "title is required!"] },
  content: { type: String, required: [true, "content is required!"] },
  category: { type: String, required: [true, "category is required!"] },
  authorId: { type: String, required: [true, "authorId is required!"] },
  author: userSchema,
  date: Date,
  image: String,
  isPublished: Boolean,
  tags: [{ type: String }],
  meta: { 
    views: Number,
    likes: Number,
    shares: Number,
  },
}, {
  toJSON: {
    transform: (doc, converted, x) => {
      converted.id = converted._id?.toString();
      delete converted._id;
    }
  }
});

postSchema.index({ title: "text", tags: "text", content: "text" });

export default postSchema;