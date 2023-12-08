import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => console.log('Server is up'));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.cyan);
});