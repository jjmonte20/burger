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
        // console.log(hbsObject);
        // rendering into the webpage
        res.render("index", hbsObject);
    });
});

// need to post data of the new burger somewhere
router.post("/api/burgers", function(req, res) {
    burger.insertInto(
        req.body.name,
        function(result) {
        // Send to the new ID made
        res.json({ id: result.insertId });
    });
});

// PAY ATTENTION TO WHAT'S BEING PASSED INTO THIS FUNCTION, COUNT HOW MANY ARE NEEDED AND KNOW WHAT'S TOO MUCH
// need to update burgers from not eaten to eaten
router.put("/api/burgers/:id", function(req, res) {
    // condition of the burger, based on the id of the burger
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.eatBurger({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;