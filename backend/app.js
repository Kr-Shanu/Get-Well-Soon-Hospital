// jshint esversion: 6
const express = require("express");
const Quote = require('inspirational-quotes');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", function (req, res) {
  res.send(Quote.getQuote());
});

app.get("/tension", function (req, res) {
  res.send("chal be tension mat de");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port, function () {
  console.log("Server started successfully");
});