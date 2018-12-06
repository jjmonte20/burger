// need to require orm.js
require("./../config/orm.js");

// in the model I want to have statements for when the burger needs to show, one is created, and one updates
var burger = {
    all: function(cb) {
        // using orm to have a templete model that works in a templete
    }
};

// export the function to the controller
module.exports = burger;