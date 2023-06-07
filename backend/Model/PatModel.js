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
    },
    profilePicture: {
        type: Buffer
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    prescription: [prescriptionSchema],
    dailyCheckup: [dailyCheckupSchema]
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;