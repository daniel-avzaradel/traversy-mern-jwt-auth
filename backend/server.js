import express from 'express';
const PORT = 5000;

const app = express();

app.get('/', (req, res) => res.send('server is ready'))

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})