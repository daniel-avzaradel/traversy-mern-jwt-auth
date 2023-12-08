import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.cyan);
});