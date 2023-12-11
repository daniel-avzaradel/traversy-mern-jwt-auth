import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;