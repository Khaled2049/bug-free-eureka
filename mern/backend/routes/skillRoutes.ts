import express from 'express';
import { createSkill, deleteSkills, getSkills, updateSkills } from '../controllers/skillControler';
const router = express.Router();

router.get('/', getSkills);

router.post('/', createSkill);

router.put('/:id', updateSkills);

router.delete('/:id', deleteSkills);
  
module.exports = router;