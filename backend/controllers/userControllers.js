import asyncHandle from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandle(async (req, res) => {
  res.status(200).send("Auth user");
});

const registerUser = asyncHandle(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already in use");
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
  } else {
      res.status(400)
      throw new Error('invalid user data')
  }
});

const logoutUser = asyncHandle(async (req, res) => {
  res.status(200).send("Logout user");
});

const getUserProfile = asyncHandle(async (req, res) => {
  res.status(200).send("Logout user");
});

const updateUserProfile = asyncHandle(async (req, res) => {
  res.status(200).send("Logout user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
