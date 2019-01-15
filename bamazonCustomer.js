// Require in MySql
var mysql = require('mysql');
// Require in Inquirer package
var inquirer = require('inquirer');

// Set up the connection to local host and db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Flight815",
    database: "bamazon"
});

// Begin the connection or throw an error
connection.connect(function(err){
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}
    console.log("IS ANYTHING WORKING?")
    // welcome();
});

// Initial prompts for user
function welcome() {
    console.log("Working");
    inquirer.prompt({

    }).then(function(answer){

    })
}
