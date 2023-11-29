import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => console.log('server is up'));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.brightYellow);
})