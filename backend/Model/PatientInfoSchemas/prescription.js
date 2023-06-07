const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({

    disease: {
        type: String,
        required: true,
    },
    fromDate: {
        type: Date,
        required: true,
    },
    medicines: [{
        type: String
    }],
    nextVisit: {
        type: Date,
    }
});

module.exports = prescriptionSchema;