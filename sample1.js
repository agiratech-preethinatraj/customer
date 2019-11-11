var  express = require('express');
var test = express();

var mysql= require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user:"root",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("I'm connected");
});





test.get('/mydb', function(request, response){
  con.query("SELECT * from  employees", function(err,result){
    if(err){
      response.status(400).send('error');
    }else{
      console.log(result);


      var json = {}

      json.emp = []

      for(r in result) {

        var ch = {};
        ch[result[r].name] = result[r].address;

        json.emp[r] = ch;
      }

      console.log(json);

      response.send(json);
    }
  });
});


test.listen(3003,function(){
  console.log('Listning to port 3003');
});



/*

var sql = "INSERT INTO employees(name,address) VALUES ?";

var values =[
  ['Yuvaraj','chennai'],
  ['John','ny'],
  ['Peter','ca']
];
con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

*/


































/*
var sql = "CREATE TABLE employees (name VARCHAR(255), address VARCHAR(255))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  */
/*
var sql = "INSERT INTO employee(name,address) VALUES ?";

var values =[
  ['Yuvaraj','chennai'],
  ['John','ny'],
  ['Peter','ca']
];
conn.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
*/
