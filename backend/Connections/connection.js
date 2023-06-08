const mongoose = require('mongoose');

// connecting to the mongoose server
const connectMongoose = async () => {

    await mongoose.connect('mongodb://localhost:27017/patientDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB server`);
    })
    .catch((error) => {
        console.log(`Caught Exception: ${error}`);
    });
}

module.exports = connectMongoose;

// Working as fine as possible: checked and verified ✅✅