import { RequestHandler } from "express";
import { IUser } from "../types";
import UserModel from "../models/userModel";

// get all Users
export const getAllUsersController: RequestHandler = async (req, res) => {
  const { page = 1, limit } = req.query;

  try {
    if (limit && Number(limit)) {
      const data = await UserModel.find()
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit))
        .exec();

      const count = await UserModel.count();

      res.json({
        users: data,
        totalPages: Math.ceil(count / Number(limit)),
        currentPage: page
      });
      return;
    }
    const data = await UserModel.find();

    res.json({ users: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// create new User
export const createUserController: RequestHandler = async (req, res) => {
  const { data }: {data: IUser} = req.body;
  
  try {
    const userExists = await UserModel.findOne({ email: data.email });
    if (userExists?.toJSON()) {
      res.status(409).send(`User with email "${data.email}" already exists`);
      return;
    }
    const response = await UserModel.create(data);

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

// get a User
export const getUserController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await UserModel.findById(id);

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

// update a User
export const updateUserController: RequestHandler = async (req, res) => {
  const { data }: {data: IUser} = req.body;
  const { id } = req.params;
  
  try {
    const response = await UserModel.findByIdAndUpdate(id, { $set: data }, { new: true });

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

// delete a User
export const deleteUserController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  
  try {
    await UserModel.findByIdAndDelete(id);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};