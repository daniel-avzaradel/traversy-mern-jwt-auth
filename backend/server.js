import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('server is ready'))

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})