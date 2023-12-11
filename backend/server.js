import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
