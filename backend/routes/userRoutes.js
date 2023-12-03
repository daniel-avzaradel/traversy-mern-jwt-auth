import express from 'express';
import { authUser, getUserProfile, logoutUsere, registerUser, updateUserProfile } from '../controllers/userController';

const router = express.Router();

router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUsere);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router