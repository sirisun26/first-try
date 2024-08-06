const mongoose = require('mongoose');

// Define a schema
const AssessmentSchema = new mongoose.Schema({
  name: {
    type: String, // Capitalized 'String' for the type
    required: true, // Add required if necessary
  },
  email: {
    type: String, // Capitalized 'String' for the type
    unique: true,
    required: true, // Add required if necessary
  },
  company: {
    type: String, // Capitalized 'String' for the type
  },
  position: {
    type: String, // Capitalized 'String' for the type
  },
  isAssessmentTaken: {
    type: Boolean, // Capitalized 'String' for the type
    defualt:false
  },
  role: {
    type: String, // Capitalized 'String' for the type
    default: 'user',
  },
  answers: {
    type: [Number], // Array of numbers
    default:[]
  },
}, {
  timestamps: true, // Add timestamps for createdAt and updatedAt
});

// Create a model
const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = Assessment;
