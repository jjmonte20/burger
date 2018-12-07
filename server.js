// need to set up the ports and stuff
const express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// serve static content for the app from the public directory
app.use(express.static("public"));

// using this to parse body data as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller");

// need to use routes to access the burger_controller
app.use(routes);

//always listen for connection on the bottom
app.listen(PORT, function() {
    console.log(PORT + " connected. Listening...")
});