import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).send('Auth user')
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error(`Email already in use`);
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).send('Loggout user')
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Get user')
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}