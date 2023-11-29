import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})