import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.brightYellow.underline);
});