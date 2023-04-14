import { RequestHandler } from "express";


export const getAllPostsController: RequestHandler = (req, res) => {
  res.send({ success: true });
};