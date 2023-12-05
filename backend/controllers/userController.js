import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'



const logoutUsere = asyncHandler(async (req, res) => {
    res.status(200).send('Logout User')
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Get User')
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