import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is Connected on host: ${conn.connection.host}`.brightMagenta);
    } catch (error) {
        
    }
};

export default connectDB;