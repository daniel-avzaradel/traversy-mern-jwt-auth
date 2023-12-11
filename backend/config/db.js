import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB is CONNECTED on host: ${conn.connection.host}`.brightMagenta
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectDB