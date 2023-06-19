const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({

    disease: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    medicines: [{
        type: String
    }],
    nextVisit: {
        type: Date,
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;