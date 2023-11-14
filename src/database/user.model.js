import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    chatId: Number,
})



const UserModel = mongoose.model("User", userSchema);


export default UserModel;