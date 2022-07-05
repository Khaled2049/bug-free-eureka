import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from '../models/userModel';

interface IUserRequest extends Request {
  user?: any; // or any other type
}

interface JwtPayload {
  id: string;
}

export const protect = asyncHandler(
  async (req: IUserRequest, res: Response, next: any) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];

        const { id } = jwt.verify(
          token,
          String(process.env.JWT_SECRET)
        ) as JwtPayload;

        req.user = await User.findById(id).select('-password');
        next();
      } catch (err: any) {
        console.log(err);
        res.status(401);
        throw new Error('Not Authorized');
      }
    }
    if (!token) {
      res.status(401);
      throw new Error('Not Authorized, no token');
    }
  }
);
