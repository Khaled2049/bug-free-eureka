import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Models
import User from '../models/userModel';

interface IUserRequest extends Request {
  user?: any; // or any other type
}

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Register
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Add all fields');
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User Already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: req.body.name,
    password: hashedPassword,
    email: req.body.email,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(String(user._id)),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user');
  }
  res.status(200).json(user);
});

// Login
export const loginUser = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const match: boolean = await bcrypt.compare(password, user!.password);
    if (user && match) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(String(user._id)),
      });
      return;
    }
    res.status(400);
    throw new Error('Invalid creds');
  }
);

// getJWT
const generateToken = (id: string) => {
  return jwt.sign({ id }, String(process.env.JWT_SECRET), {
    expiresIn: '1h',
  });
};

// CurrentUser
export const getCurrentUser = asyncHandler(
  async (req: IUserRequest, res: Response) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({ id: _id, name, email });
  }
);
