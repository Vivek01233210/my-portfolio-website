import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    const token = req.cookies["token"];

    if (!token) {
        return res.status(401).json({ isAuthenticated: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // find the user
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ isAuthenticated: false });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ isAuthenticated: false, error });
    }
};