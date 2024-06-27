// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Example route handling
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.send(bookings);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
