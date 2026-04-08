import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("already connected to db");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to db");
  } catch (error) {
    console.log("failed to connect to db", error);
    throw error;
  }
};

export default connectDb;
