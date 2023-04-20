import { RequestHandler } from "express";
import { IComment } from "../types";
import CommentModel from "../models/commentModel";

// get all Comments
export const getAllCommentsController: RequestHandler = async (req, res) => {
  const { page = 1, limit, postId } = req.query;

  try {
    if (limit && Number(limit)) {
      const data = await CommentModel.find(postId ? { postId } : {})
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
        .exec();

      const count = await CommentModel.find(postId ? { postId } : {}).count();

      res.json({
        comments: data,
        totalPages: Math.ceil(count / Number(limit)),
        currentPage: page
      });
      return;
    }
    const data = await CommentModel.find(postId ? { postId } : {});

    res.json({ comments: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// create new Comment
export const createCommentController: RequestHandler = async (req, res) => {
  const { data, postId }: {data: IComment, postId: string} = req.body;
  
  try {
    const response = await CommentModel.create({ ...data, postId });

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

// get a Comment
export const getCommentController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await CommentModel.findById(id);

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

// update a Comment
export const updateCommentController: RequestHandler = async (req, res) => {
  const { data }: {data: IComment} = req.body;
  const { id } = req.params;
  
  try {
    const response = await CommentModel.findByIdAndUpdate(id, { $set: data }, { new: true });

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

// delete a Comment
export const deleteCommentController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    await CommentModel.findByIdAndDelete(id);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};