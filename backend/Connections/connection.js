const mongoose = require('mongoose');

// Connecting to the MongoDB server
const connectMongoose = async () => {
    try {
        const username = process.env.DATABASE_USERNAME;
        const password = process.env.MONGO_PW;
        const databaseName = process.env.DATABASE_NAME; 
        
        const connectionString = `mongodb+srv://${username}:${password}@cluster0.q25eo.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
        
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB server');
    } catch (error) {
        console.log(`Caught Exception: ${error}`);
    }
};

module.exports = connectMongoose;
