import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Authenticate user
const authUser = asyncHandler(async (req, res) => {
  console.log("User authorized");
  res.status(200).send("auth user");
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists. Email already in use");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
    console.log(`User registered`.white.underline, user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = async (req, res) => {
  console.log("login user");
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
