import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && user.matchPassword(password)) {
        generateToken(res, user._id);
        res.status(201).json(user);
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('Email already in use');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const logoutUsere = asyncHandler(async (req, res) => {
    res.status(200).send('Logout User')
});

const getUserProfile = asyncHandler(async (req, res) => {

    const users = await User.find();

    if (users) {
        res.status(200).json(users);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Update User')
});

export {
    authUser,
    registerUser,
    logoutUsere,
    getUserProfile,
    updateUserProfile
}