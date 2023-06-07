const mongoose = require('mongoose');

const dailyCheckupSchema = new mongoose.Schema({

    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    bmi: {
        type: Number,
    },
    systolicPressure: {
        type: Number,
    },
    dialstolicPressure: {
        type: Number,
    },
    bloodSugar: {
        type: Number,
    },
    caloriesIntake: {
        type: Number,
    },
    caloriesBurnt: {
        type: Number,
    }
});

module.exports = dailyCheckupSchema;