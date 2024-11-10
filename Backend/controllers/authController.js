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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const { password: userPassword, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "15d" }
        );

        res.cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), 
        });

        res.status(200).json({
            success: true,
            message: "Successfully Logged in",
            token, 
            data: { ...rest },
            role,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Failed to login" });
    }
};