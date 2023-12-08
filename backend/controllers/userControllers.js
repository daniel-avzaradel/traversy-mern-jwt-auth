import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).send('User autheticated')
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).send('User registered')
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).send('User logged out')
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Get user profile')
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).send('Updated user profile')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}