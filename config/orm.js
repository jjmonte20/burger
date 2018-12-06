// need to require connection.js in this file
const connection = require("./connection.js");

// need to make a variable called orm
var orm = {
    // want a catch all to select all
    selectAll: function(tableName){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    },

    // want a catch all to add a burger
    insertInto: function(tableName, abName, rowName){
        // making a string that should allow users to add a burger, will automatically not be eaten though
        var queryString = "INSERT INTO ?? (??) VALUES (?, false)";
        connection.query(queryString, [tableName, abName, rowName], function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    },

    // want a catch all for updating a burger from not eaten to eaten
    eatBurger: function(tableName, col, boole, abId, brgrId) {
        // this is meant to update a burger from burgers table to eaten = true where the id is the identifier,
        // would use name, but do not want a situation where 2 burgers of the same name get eaten at the same time
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, col, boole, abId, brgrId], function(err, data) {
            if (err) throw err;
            console.log(data);
        });
    }
}

// export orm to model
module.exports = orm;