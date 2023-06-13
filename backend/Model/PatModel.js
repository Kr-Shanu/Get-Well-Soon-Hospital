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
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    prescription: [Prescription.schema],
    dailyCheckup: [DailyCheckup.schema],
}, {timestamps: true});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;