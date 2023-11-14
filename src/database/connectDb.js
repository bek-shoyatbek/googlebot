import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (err) {
        console.error(err);
    }
}


export default connectDb;