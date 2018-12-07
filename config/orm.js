// need to require connection.js in this file
const connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // this will make it so that in the controller,
        // when I pass through "eaten = true", it will pick it up as such passsing it along as colBl
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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
    eatBurger: function(tableName, colBl, condition, cb) {
        // this is meant to update a burger from burgers table to eaten = true where the id is the identifier,
        // would use name, but do not want a situation where 2 burgers of the same name get eaten at the same time
        // UPDATE burgers SET eaten = true WHERE id = valueId
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(colBl);
        queryString += " WHERE ";
        queryString += condition;
        
        // testing the query string
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// export orm to model
module.exports = orm;