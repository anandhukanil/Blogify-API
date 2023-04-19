import { model } from "mongoose";
import { Models } from "../types";
import apiKeySchema from "../schemas/apiKeySchema";


const ApiKeyModel = model(Models.APIKey, apiKeySchema);

export default ApiKeyModel;