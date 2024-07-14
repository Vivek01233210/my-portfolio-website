import Message from "../models/messageModel.js";

// create a message 
export const createMessage = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Please provide your name!' });
    } else if (!message) {
        return res.status(400).json({ error: 'Please provide a message!' });
    }

    try {
        await Message.create({ name, email, message });
        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// get all messages
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};