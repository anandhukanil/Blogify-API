import { Schema } from "mongoose";
import { IAPIKey } from "../types";

const apiKeySchema = new Schema<IAPIKey>({
  email: { type: String, required: [true, "Email is required!"]},
  name: { type: String, required: [true, "Name is required!"]},
  token: { type: String, required: [true, "Key is required!"]},
}, {
  toJSON: {
    transform: (doc, converted) => {
      converted.id = converted._id?.toString();
      delete converted._id;
    }
  }
});

export default apiKeySchema;