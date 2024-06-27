// index.js or where you define your routes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookingRoutes');
const Hall Booking API.postman_collection = require('./routes/Hall Booking API.postman_collection');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = 'mongodb://localhost:27017/hall-booking-db'; // Replace with your MongoDB URI

app.use(bodyParser.json());
app.use(bookingRoutes);

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
    res.send('Hall Booking API is running');
});

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

    