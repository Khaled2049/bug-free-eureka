import express from 'express';
import {
  createUser,
  getUsers,
  getCurrentUser,
  loginUser,
} from '../controllers/userController';

import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/currentUser', protect, getCurrentUser);

export default router;
