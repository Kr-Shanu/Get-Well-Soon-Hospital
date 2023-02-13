// jshint esversion: 6
const express = require("express");

// require mongoose to setup database
const mongoose = require('mongoose');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static("public"));

// connection to mongoose local server at host 27017
// and creating a database named Patient DataBase
mongoose.connect('mongodb://localhost:27017/patientDB');

// Making schema of the database patient
const patSchema = {
  name: String,
  age: Number,
  dob: Date,
  address: String,
  dailyCheckUp :[{
    data: Date,
    systolic: Number,
    diastolic: Number,
    sugar: Number,
    height: Number,
    weight: Number,
    calCount: Number
  }],
  prescription:[{
    doctorName: String,
    date: Date,
    medicines:[],
    disease: String
  }]
};

// Creating a collection model for the new schema created.
// the collection name would ne pats
const Pat = mongoose.model("Pat", patSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname,'/index.html');
});

app.get("/tension", function (req, res) {
  res.send("<h1>Chal be tension mat de</h1>");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}


app.listen(port, function () {
  console.log("Server started successfully");
});