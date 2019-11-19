var express = require('express');
var poo = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "preethi",
  password: "Preethi@123",
 database: "mydb"});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
});*/


//for creating table
/*  var s = "CREATE TABLE customers (id int,name varchar(100),address varchar(100),rating int)";
con.query(s, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});


//inserting values
  var s = "INSERT INTO customer(name , address) VALUES ('micheal','miami')";
  con.query(s, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });*/

// inserting multiple values
var s = "INSERT INTO customers (id,name, address,rating) VALUES ?";
  var values = [
    [1,'John', 'Highway 71',5],
    [2,'Peter', 'Lowstreet 4',3],
    [3,'Amy', 'Apple st 652',2],
    [4,'Hannah', 'Mountain 21',4],
    [5,'Michael', 'Valley 345',2],
    [6,'Sandy', 'Ocean blvd 2',1],
    [7,'Betty', 'Green Grass 1',5],
    [8,'Richard', 'Sky st 331',5],
    [9,'Susan', 'One way 98',3],
    [10,'Vicky', 'Yellow Garden 2',2],
    [11,'Ben', 'Park Lane 38',4],
    [12,'William', 'Central st 954',3],
    [13,'Chuck', 'Main Road 989',3],
    [14,'Viola', 'Sideway 1633',1]
  ];
  con.query(s, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
