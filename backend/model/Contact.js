const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true,
        minlength: [2, "Name must be at least 2 character"],
        maxlength: [50, "Name cannot exceed 50 character"]

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'invalid email format']
    },
    phone: {
        type: String,
        required: [true, 'phone number is required'],
        match: [/^(?:\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/, 'invalid phone no format']
    },
    subject: {
        type: String,
        required: [true, 'subject is required'],
        trim: true,
        maxlength: [100, 'Subject cannot exceed 100 character']
    },
    message: {
        type: String,
        required: [true, 'message is required'],
        trim: true,
        minlength: [10, 'message must be at least 10 characters'],
        maxlength: [1000, 'message cannot exceed 1000 character']
    },
    isRead: {
        type: Boolean,
        default: false
    },
    ipAddress: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema)