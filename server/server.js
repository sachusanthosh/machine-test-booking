const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Booking = require("./models/Booking");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// connecting to db
connectDB();

// creating post and get route in the server file

// post route for booking
app.post("/bookings", async (req, res) => {
    try {
        const { name, email, service, date } = req.body;
        if (!name || !email || !service || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBooking = new Booking({ name, email, service, date });
        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get route for fetching
app.get("/bookings", async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App running on port ${process.env.PORT || 5000}`);
});