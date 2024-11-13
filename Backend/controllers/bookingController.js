import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save(); // Add 'await' here

        res.status(200).json({
            success: true,
            message: "Booking Completed",
            data: savedBooking,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

