import mongoose from "mongoose";

const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected to: ${conn.connection.host}`.magenta);
  } catch (error) {
    console.error("Connection failed: " + error);
  }
};

export default connectDB;
