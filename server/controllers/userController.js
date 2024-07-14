import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Message from "../models/messageModel.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    // check if the user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) res.status(400).json({ error: 'Invalid credentials' });

    // check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ error: 'Invalid credentials' });

    // save user in the req object
    req.user = user;

    // send a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1-day
        secure: process.env.NODE_ENV === 'production',
    });

    return res.status(200).json({ isAuthenticated: true, user });
};

// logout route
export const logout = (req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    return res.status(200).json({ message: "logout success" })
};

export const checkUser = async (req, res, next) => {
    const token = req.cookies["token"];

    if (!token) {
        return res.status(200).json({ isAuthenticated: false, user: null });
    }
    try {
        // console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // find the user
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ isAuthenticated: false });
        }

        return res.status(200).json({ isAuthenticated: true, user });

    } catch (error) {
        return res.status(401).json({ isAuthenticated: false, error });
    }
};

// message 
export const message = async (req, res) => {
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
