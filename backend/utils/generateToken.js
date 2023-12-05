import jwt from 'jsonwebtoken';

const generateToken = async (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: 300
    });

    res.cookie('jwt', token, {
        maxAge: 90000,
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict'
    });
}

export default generateToken;