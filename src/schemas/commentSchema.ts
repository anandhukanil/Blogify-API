import { Schema } from "mongoose";
import { IComment } from "../types";
import userSchema from "./userSchema";

const commentSchema = new Schema<IComment>({
  postId: { type: String, required: true },
  authorId: { type: String, required: true },
  content: { type: String, required: true },
  date: Date,
  author: userSchema,
}, {
  toJSON: {
    transform: (doc, converted) => {
      converted.id = converted._id?.toString();
      delete converted._id;
    }
  }
});

export default commentSchema;