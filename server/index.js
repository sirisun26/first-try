const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Assessemnt = require('./models/assessment.model.js');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Update assessment data
app.put('/submitAssessment', async (req, res) => {
    try {
        const dataToUpdate = {
            email: req.body.email,
            isAssessmentTaken: req.body.isAssessmentTaken,
            answers: req.body.answers // Ensure the property name matches your schema
        };

        const updatedData = await Assessemnt.findOneAndUpdate(
            { email: req.body.email },
            dataToUpdate,
            { new: true, upsert: true }
        ); // `upsert: true` creates a new document if one doesn't exist

        res.json({ success: true, message: 'Data updated successfully', data: updatedData });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.put('/submitUserData', async (req, res) => {
    try {
        const existingUser = await Assessemnt.findOne({ email: req.body.email });

        if (existingUser) {
            // Handle existing user data if needed
            // For example, you can return the existing user data if required
            return res.json({ success: true, message: 'User data already exists', data: existingUser });
        }

        const dataToUpdate = {
            name: req.body.name,
            company: req.body.company,
            position: req.body.position,
            email: req.body.email
        };

        const updatedData = await Assessemnt.findOneAndUpdate(
            { email: req.body.email },
            dataToUpdate,
            { new: true, upsert: true }
        );

        res.json({ success: true, message: 'User data saved successfully', data: updatedData });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Read data
app.get('/', async (req, res) => {
    try {
        const existingUser = await Assessemnt.findOne({ email: req.body.email });

        if (existingUser) {
            return res.json({ success: true, message: 'User data already exists', data: existingUser });
        }
        if (!data) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }

        res.json({ success: true, data: data });
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
