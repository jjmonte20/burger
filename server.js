// need to set up the ports and stuff
const express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// include requirements
const orm = require("./config/orm.js");
// const connection = require("./config/connection.js");

// using this to parse body data as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.enging("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//always listen for connection on the bottom
app.listen(PORT, function() {
    console.log(PORT + " connected. Listening...")
});