// need to require orm.js
var orm = require("./../config/orm.js");

// in the model I want to have statements for when the burger needs to show, one is created, and one updates
var burger = {
    // this function shows all of the burgers
    selectAll: function(cb) {
        // using orm to have a templete model that works in a templete
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // this function creates a new burger
    insertInto: function(valueNm, cb) {
        orm.insertInto("burgers", "name", "eaten", valueNm, function(res) {
            cb(res);
        });
    },
    // this function updates the burgers to be eaten
    eatBurger: function(colId, valueId, cb){
        orm.eatBurger("burgers", "eaten", true, colId, valueId, function(res){
            cb(res);
        });
    }
};

// export the function to the controller
module.exports = burger;