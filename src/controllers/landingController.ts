import { RequestHandler } from "express";
import { marked } from "marked";
import fs from "fs";
import jwt from "jsonwebtoken";
import ApiKeyModel from "../models/apiKeyModel";

// get landing page
export const getLandingPageController: RequestHandler = (req, res) => {

  res.render("index", {"apiKey": undefined, "errorMessage": undefined});
};

// get documentation page
export const getDocsPageController: RequestHandler = (req, res) => {
  
  const md = function (filename: string) {
    const path = filename;
    const include = fs.readFileSync (path, "utf8");
    const html = marked(include);

    return html;
  };

  res.render("docs", {"md": md});
};

export const registrationController: RequestHandler = async (req, res) => {
  const { name, email } = req.body;
  const secret = process.env.API_SECRET as string;

  const alreadyRegistered = await ApiKeyModel.findOne({ email: email });

  if (alreadyRegistered?.toJSON()) {
    res.render("index", {"apiKey": undefined, "errorMessage": "Email is already registered!"});
    return;
  }
  const token = jwt.sign({ name, email }, secret);
  await ApiKeyModel.create({ name, email, token });

  res.render("index", { "apiKey": token, "errorMessage": undefined});
};