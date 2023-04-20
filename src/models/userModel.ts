import { model } from "mongoose";
import { Models } from "../types";
import userSchema from "../schemas/userSchema";


const UserModel = model(Models.User, userSchema);

export default UserModel;