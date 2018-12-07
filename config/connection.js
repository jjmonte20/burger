// need to require node to sql
const mysql = require("mysql");
// making connection dynamic so it can be used locally or online
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// want to export the function so it can be used elsewhere

// now I want to connect mysql to by database
    connection = mysql.createConnection({
        // host should be local
        host: "localhost",
        // port number
        port: 3306,
        // user name
        user: "root",
        // password, for use on a local server
        password: "",
        // what database am I connecting to
        database: "burgerDB"
    });
};

// then connect to the database
connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    };
    console.log("connected as... " + connection.threadId);
});

module.exports = connection;