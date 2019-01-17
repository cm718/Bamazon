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
connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log("SERVER RUNNING");
    display();
    // prompts();
});

//Displays the table of data in the database
function display() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        //display a table of the results of the sql statement
       console.table(results);
});
prompts();
}

// Initial prompts for user
function prompts() {
    inquirer.prompt([{
            "type": "input",
            "name": "id",
            "message": "What is the ID of the item you would like to buy?"
        },
        {
            "type": "input",
            "name": "quantity",
            "message": "How many would you like to buy?"
        }]).then(function (answer) {
            let id = answer.id;
            console.log(id);
            let quantity = answer.quantity;
            console.log(quantity);
            connection.query(`SELECT stock_quantity FROM products WHERE ${answer.id} = item_id`, function(err, results){
                if (err) throw err;
                console.log(`-------------------------`);
                if(quantity > results[0].stock_quantity){
                    console.log("Insufficient Quantity!");
                    prompts();
                } else {
                    connection.query(`UPDATE products SET stock_quantity = results[0].stock_quantity - quantity WHERE ${answer.id} = item_id`)
                    console.log(`Success! You bought ${answer.quantity}`)
                }
            })
            prompts();
    });
}

