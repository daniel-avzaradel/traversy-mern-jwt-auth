import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth', authUser).post('/', registerUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

export default router;