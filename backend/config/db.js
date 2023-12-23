import mongoose from "mongoose";

const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB is connected on host: ${conn.connection.host}`.magenta);
  } catch (error) {
      console.error(error)
  }
};

export default connectDB