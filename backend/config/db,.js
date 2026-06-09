const mongoose = require("mongoose")

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected Successfull`)
    } catch (error) {
        console.log("MongoDB Connection Error");
        process.exit(1)
    }
}

module.exports = connectDB;