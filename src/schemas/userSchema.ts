import { Schema } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email:  { type: String, required: true },
}, {
  toJSON: {
    transform: (doc, converted) => {
      converted.id = converted._id?.toString();
      // converted.author = doc.
    }
  }
});

export default userSchema;