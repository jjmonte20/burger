// need to require connection.js in this file
const connection = require("./connection.js");

// will need to export these functions as well
module.exports = function() {
    // in this file I will use the following functions that will need to be defined

    // select all should select and display all of the burgers
    function selectAll(){
        connection.query("SELECT * FROM burgers", function(err) {
            if (err) throw err;
            console.log("showing burgers");
        });
    }

    // insertOne will most likely add one burger to the table
    function insertOne() {
        connection.query("INSERT INTO burgers SET ?",{
            // want to set name to the inserted name from the webpage
            name: "",
            // eaten should always start as false
            eaten: FALSE
        },
        function(err) {
            if(err) throw err;
            // check console to see that a burger was added
            console.log("burger added");
        } )
    }

    // updateOne will most likely update the eaten bool from false to true
    function updateOne() {
        connection.query("UPDATE burgers SET ? WHERE ?",
        [
            {
                eaten: TRUE
            },
            {
                // want to set name where user clicks, replace empty quotes with value
                name: ""
            }
        ],
        function(err) {
            if (err) throw err;
            console.log("eaten");
        })
    }

}