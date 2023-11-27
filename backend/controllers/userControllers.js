import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (req, res) => {
    

    res.status(200).send('auth user')
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).send('user logged out')
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('Email already in use');
    } else {
        
        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        } else {
            res.status(400);
            throw new Error('Invalid user data')
        }
        
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('get user')
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('updated user')
});

export {
    authUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
}