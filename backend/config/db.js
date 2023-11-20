import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`.magenta);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

export default connectDB