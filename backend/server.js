import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is connected on port: ${PORT}`.yellow.underline);
})