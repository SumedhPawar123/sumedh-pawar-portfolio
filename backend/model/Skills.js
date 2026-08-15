const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Skills name is required'],
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['frontend', 'backend', 'database', 'tools', 'authentication', 'others'],
        default: 'others'
    },
    proficiency: {
        type: Number,
        min: 0,
        max: 100,
        default: 75
    },
    icon: {
        type: String,
        default: ''
    },
    order: {
        type: Number,
        default: 0
        
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Skill", skillSchema)