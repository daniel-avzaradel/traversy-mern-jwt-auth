import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).send('Auth user')
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(201).send('Register user')
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