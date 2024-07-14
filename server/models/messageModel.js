import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"],
        },
        email: {
            type: String,
        },
        message: {
            type: String,
            required: [true, "Please provide a message"],
        },
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;