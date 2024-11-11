import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: "Successfully Created", data: savedTour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create, try again" });
    }
};

export const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body,
        }, { new: true });

        res.status(200).json({ success: true, message: "Successfully Updated", data: updatedTour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update, try again" });
    }
};

export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully Deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete, try again" });
    }
};