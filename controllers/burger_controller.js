// need express
const express = require("express");

//need app
var router = express.Router();

// need to connect the model
require("./../models/burger.js");

router.get("/", function(req, res) {
    // burger model is exported as "burger"
});

module.exports = router;