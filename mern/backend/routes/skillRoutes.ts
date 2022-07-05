import express from 'express';
import {
  createSkill,
  deleteSkills,
  getSkills,
  updateSkills,
} from '../controllers/skillControler';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', protect, getSkills);

router.post('/', protect, createSkill);

router.put('/:id', protect, updateSkills);

router.delete('/:id', protect, deleteSkills);

export default router;
