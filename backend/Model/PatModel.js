// Here we will create a model for patient information
const mongoose = require('mongoose');
const prescriptionSchema = require('./PatientInfoSchemas/prescription');
const dailyCheckupSchema = require('./PatientInfoSchemas/dailyCheckUp');

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
    prescription: [prescriptionSchema],
    dailyCheckup: [dailyCheckupSchema],
}, {timestamps: true});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;