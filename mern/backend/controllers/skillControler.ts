import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// Models
import Skill from '../models/skillModel';
import User from '../models/userModel';

export const getSkills = asyncHandler(async (req: Request, res: Response) => {
  const skills = await Skill.find({ user: req.user.id });
  res.status(200).json(skills);
});

export const createSkill = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    throw new Error('Please add a skill field');
  }

  const skill = await Skill.create({
    user: req.user.id,
    name: req.body.name,
    level: req.body.level,
    desc: req.body.desc,
    inProgress: req.body.inProgress,
  });

  res.status(200).json(skill);
});

export const updateSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      res.status(400);
      throw new Error('Skill not found');
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    }

    if (skill.user.toString() !== user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedSkill);
  }
);

export const deleteSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      res.status(400);
      throw new Error('Skill not found');
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    }

    if (skill.user.toString() !== user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    await Skill.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: `Skill ${req.params.id} deleted` });
  }
);
