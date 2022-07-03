import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export const getSkills = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get Skills' });
});
export const createSkill = asyncHandler(async (req: Request, res: Response) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Create Skills' });
});
export const updateSkills = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ message: `Update skill ${req.params.id}` });
  }
);
export const deleteSkills = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ message: `Delete skill ${req.params.id}` });
  }
);
