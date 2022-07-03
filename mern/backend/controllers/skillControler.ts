import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// Models
import Skill from '../models/skillModel';

export const getSkills = asyncHandler(async (req: Request, res: Response) => {
  const skills = await Skill.find();
  res.status(200).json(skills);
});

export const createSkill = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body)
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    throw new Error('Please add a skill field');
  }

  const skill = await Skill.create({
    name: req.body.name,
    level: req.body.level,
    desc: req.body.desc,
    inProgress: req.body.inProgress
  })

  res.status(200).json(skill);
});

export const updateSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      res.status(400);
      throw new Error('Skill not found');
    }

    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

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

    await Skill.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({ message: `Skill ${req.params.id} deleted` });
  }
);
