import asyncHandler from 'express-async-handler'

const notFound = asyncHandler(async (req, res, next) => {
    const error = new Error(`Error found: ${req.originalUrl}`);
    res.status(400);
    next(error);
});

const errorHandler = asyncHandler(async (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found'
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })


})

export { notFound, errorHandler }