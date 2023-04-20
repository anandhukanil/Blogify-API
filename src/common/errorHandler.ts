import { ErrorRequestHandler, Request, Response } from "express";

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response) => {
  console.error(err.message, err);
  return res.status(400).json({
    error: err.message,
  });
};

export default errorHandler;