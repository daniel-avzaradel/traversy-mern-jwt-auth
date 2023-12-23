import express from 'express';
import { authUser, getUserProfile, logoutUser, registerUser, updateUserPorfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserPorfile)

export default router