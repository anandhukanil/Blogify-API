import { RequestHandler } from "express";
import PostModel from "../models/postModel";


export const getAllPostsController: RequestHandler = async (req, res) => {
  try {
    const data = await PostModel.find();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

export const getPostController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await PostModel.findById(id);

    if (!data?.toJSON()) {
      res.sendStatus(404);
      return;
    }

    res.json(data.toJSON());
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};