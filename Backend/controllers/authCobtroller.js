import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            photo: req.body.photo,
            role: req.body.role || "user"
        });

        await newUser.save();
        res.status(200).json({ success: true, message: "Successfully Created" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create" });
    }
};