const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  shortDesc: {
    type: String,
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  techStack: [{
    type: String,
    trim: true
  }],
  githubUrl: {
    type: String,
    trim: true
  },
  liveUrl: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['fullstack', 'frontend', 'backend', 'mobile', 'other'],
    default: 'fullstack'
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);