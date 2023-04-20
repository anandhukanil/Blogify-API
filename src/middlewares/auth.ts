import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const secret = process.env.API_SECRET as string;

    jwt.verify(token, secret, (err) => {
      if (err) {
        res.sendStatus(403);
        return;
      }

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default auth;