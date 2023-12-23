import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import userRoute from './routes/userRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.yellow.underline);
})