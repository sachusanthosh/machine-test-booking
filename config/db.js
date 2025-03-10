const mongoose = require("mongoose")
require('dotenv').config()


// dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sachusanthosh011:6BhUyvlrGPL1ko8P@cluster1.9rpvq.mongodb.net/");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;