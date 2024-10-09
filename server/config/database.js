import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected".bgMagenta.white);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
