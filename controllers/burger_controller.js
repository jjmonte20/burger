// need express
const express = require("express");

//need app
var router = express.Router();

// need to connect the model
var burger = require("../models/burger");

router.get("/", function(req, res) {
    // burger model is exported as "burger"
    burger.selectAll(function(data) {
        // handlebars object
        var hbsObject = {
            burgers: data
        };
        // checking to make sure it works
        console.log(hbsObject);
        // rendering into the webpage
        res.render("index", hbsObject);
    });
});

module.exports = router;