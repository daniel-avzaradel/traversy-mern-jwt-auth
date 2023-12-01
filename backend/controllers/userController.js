import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).send('Auth User')
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).send('Register User')
});

const logoutUser = asyncHandler(async (req, res) => {
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
    logoutUser,
    getUserProfile,
    updateUserProfile,
}