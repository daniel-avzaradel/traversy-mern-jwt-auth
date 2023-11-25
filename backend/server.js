import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import { errorHandler, notFound } from "./middlewares/asyncHandler.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.cyan.underline);
})