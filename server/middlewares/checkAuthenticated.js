import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const checkAuthenticated = async (req, res, next) => {
    const token = req.cookies["token"];

    if (!token) {
        return res.status(401).json({ isAuthenticated: false });
    }
    try {
        // console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // find the user
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ isAuthenticated: false });
        } else {
            return res.status(200).json({ isAuthenticated: true, user });
        }
    } catch (error) {
        return res.status(401).json({ isAuthenticated: false, error });
    }
};