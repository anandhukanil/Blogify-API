import { RequestHandler } from "express";
import PostModel from "../models/postModel";
import { IPost } from "../types";
import { SortOrder } from "mongoose";

// get all Posts
export const getAllPostsController: RequestHandler = async (req, res) => {
  const { page = 1, limit, sortBy } = req.query;

  try {
    if (limit && Number(limit)) {
      const sort: string[] = (sortBy as string)?.split(":");
      const data = await PostModel.find()
        .sort(sort && { [sort[0]]: sort[1]} as { [x: string]: SortOrder })
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
        .exec();

      const count = await PostModel.count();

      res.json({
        posts: data,
        totalPages: Math.ceil(count / Number(limit)),
        currentPage: page
      });
      return;
    }
    const data = await PostModel.find();

    res.json({ posts: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// create new Post
export const createPostController: RequestHandler = async (req, res) => {
  const { data }: {data: IPost} = req.body;
  
  try {
    const response = await PostModel.create(data);

    if (!response?.toJSON()) {
      res.sendStatus(400);
      return;
    }

    res.json(response.toJSON());
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get a Post
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

// update a Post
export const updatePostController: RequestHandler = async (req, res) => {
  const { data }: {data: IPost} = req.body;
  const { id } = req.params;
  
  try {
    const response = await PostModel.findByIdAndUpdate(id, { $set: data }, { new: true });

    if (!response?.toJSON()) {
      res.sendStatus(400);
      return;
    }

    res.json(response.toJSON());
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// delete a Post
export const deletePostController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    await PostModel.findByIdAndDelete(id);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// search Posts
export const searchPostsController: RequestHandler = async (req, res) => {
  const { query } = req.query;
  
  try {
    const data = await PostModel.find({$text: {$search: query as string}});

    res.json(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};