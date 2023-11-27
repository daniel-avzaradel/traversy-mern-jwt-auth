import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).send('auth user')
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).send('user logged out')
});

const registerUser =  asyncHandler(async (req, res) => {
    res.status(201).send('registered user')
});

const getUserProfile =  asyncHandler(async (req, res) => {
    res.status(200).send('get user')
});

const updateUserProfile =  asyncHandler(async (req, res) => {
    res.status(200).send('updated user')
});

export {
    authUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
}