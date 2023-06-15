// Here we will create a model for patient information
const mongoose = require('mongoose');
const Prescription = require('./PatientInfoSchemas/prescription');
const DailyCheckup = require('./PatientInfoSchemas/dailyCheckUp');

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: Buffer
    },
    email: {
        type: String,
        unique: true,
    },
    city: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    bookings: [{
        doctorName: {
            type: String,
            required: true,
        },
        doctorId: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            default: Date.now,
        }
    }],
    prescription: [Prescription.schema],
    dailyCheckup: [DailyCheckup.schema],
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;