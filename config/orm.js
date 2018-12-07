// need to require connection.js in this file
const connection = require("./connection.js");

// need to make a variable called orm
var orm = {
    // want a catch all to select all
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // want a catch all to add a burger
    insertInto: function(tableName, colnm, valueNm, cb){
        // making a string that should allow users to add a burger, will automatically not be eaten though
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colnm, valueNm], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // want a catch all for updating a burger from not eaten to eaten
    eatBurger: function(tableName, colBl, boole, colId, valueId, cb) {
        // this is meant to update a burger from burgers table to eaten = true where the id is the identifier,
        // would use name, but do not want a situation where 2 burgers of the same name get eaten at the same time
        // UPDATE burgers SET eaten = true WHERE id = valueId
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, colBl, boole, colId, valueId], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// export orm to model
module.exports = orm;