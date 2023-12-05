import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign(userId, process.env.JWT_SECRET, {
        expiresIn: 300
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 9000
    });
};

export default generateToken;