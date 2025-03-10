const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;