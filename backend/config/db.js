import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `[INFO] MongoDB Connected: ${response.connection.host}`.cyan.bold
    );
  } catch (error) {
    console.error(`[ERR] ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
