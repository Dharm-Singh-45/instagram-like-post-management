import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("db connected", conn.connection.host);
  } catch (error) {
    console.log("erroe in connecting mongodb", error);
  }
};

export default connectDb;
