import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is Connected to host: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;