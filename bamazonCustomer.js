var mysql = require("mysql");
var inquirer = require("inquirer");

var itemPick = "";
var prodCount = "";

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  listProducts();
  initialPromtp();
});

function listProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function initialPromtp() {
  inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is the item ID of the product you would like to buy?",
      name: "prodID"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "How many units would you like to buy?",
      name: "unitCount"
    }
  ])
  .then(function(answers) {

   itemPick = answers.prodID;

   prodCount = answers.unitCount;

  });
}

function quantityChecker(){
  //pick the product from the database
  //check the quantity
  //if quantity is > the number the user wants to buy then update data base
  //if quantity is < the number the user wants, console log insuficient quantity
}

//create a function that if the quantity is > than the user wants then updates the data base
//after updating the data base add all the prices of the items and show the user its total
