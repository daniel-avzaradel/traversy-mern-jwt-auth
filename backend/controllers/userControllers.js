import asyncHandler from 'express-async-handler';

// Authenticate user
const authUser = async (req, res) => {
    console.log('User authorized');
    res.status(200).send('auth user')
}

const loginUser = async (req, res) => {
  console.log("login user");
};

const registerUser = async (req, res) => {
  console.log("register user");
};

const getUserProfile = async (req, res) => {
  console.log("get user profile");
};

const updateUserProfile = async (req, res) => {
  console.log("update user profile");
};

const logoutUser = async (req, res) => {
  console.log("logout user");
};

export {
  authUser,
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
};
