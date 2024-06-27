// models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    hallName: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    organizerName: { type: String, required: true },
    contactNumber: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
