import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/', (req, res) => {
    console.log(`Server is running`.green);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.underline);
})