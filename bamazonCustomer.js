var mysql = require("mysql");
var inquirer = require("inquirer");

// var itemPick = "";
// var prodCount = "";
// var totalPrice = 0;

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
});

var mysql = require("mysql");
var inquirer = require("inquirer");

// var itemPick = "";
// var prodCount = "";

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

function listProducts(){
  
  connection.query('SELECT * FROM Products', function(err, res){

    if(err) throw err;
    
    for(var i = 0; i<res.length;i++){
      console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
      }
      initialPrompt();
    }
)};


function initialPrompt() {
  inquirer
  .prompt([
    
    {
      type: "input",
      message: "What is the item ID of the product you would like to buy?",
      name: "prodID"
    },
    
    {
      type: "input",
      message: "How many units would you like to buy?",
      name: "unitCount"
    }
  ])
  .then(function(main) {

  //  itemPick = answers.prodID;

  //  prodCount = answers.unitCount;

  //  console.log(itemPick);
  //  console.log(prodCount);

  //  checker(prodCount, itemPick);

  connection.query("SELECT * FROM products WHERE item_id=?", main.prodID, function(err, res) {
    for (var i = 0; i < res.length; i++) {

        if (main.unitCount > res[i].stock_quantity) {

            console.log("Sorry! We do not have enough in stock of the product you wanted");

            listProducts();

        } else {
            
          var newStock = (res[i].stock_quantity - main.unitCount);
          var purchaseId = (main.prodID);

          var totalPrice = console.log("Total: $" + (res[i].price * main.prodID).toFixed(2));

          connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: newStock
          }, 
          {
              item_id: purchaseId
          }], function(err, res) {
            
          });

          totalPrice;
          console.log("Thank you for your purchase");

        }
    }
});

  });
}


// checker = (val, prod)=>{
//   var prodNum;
//   var query = connection.query(
//       "SELECT stock_quantity, price FROM products WHERE ?",
//       {
//          product_name: prod
//       },
//       function(err, res){
//           if (err) throw err

//           prodNum = (prodCount - val)

//           if(prodNum >! res.stock_quantity){

//               totalPrice += (res.price * val).toFixed(2)
//               var query = connection.query(
//                   "UPDATE products SET ? WHERE ?",
//                   [
//                       {
//                           stock_quantity: prodNum
//                       },
//                       {
//                           product_name: prod
//                       }
//                   ],
//                   function(err, res) {
//                      thankYouPrompt();
//                   }
//               )
//           } 
          
//           else{
//               console.log("I'm sorry, we do not have enough inventory");
//               listProducts();
//           }
//       }  
//   )
// };
// }

// thankYouPrompt = () => {
//           console.log(`Total Cost: $${totalPrice}`)
//           console.log('========================')
//           console.log("Thank you for shopping! An F15 jet will drop the carepackage in about 1 hour")

//           connection.end();
// }
