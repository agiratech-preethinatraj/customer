var express = require('express');
var stocks = express();
var cors= require('cors');

stocks.use(cors());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  */
  /*
  var sql = "CREATE TABLE stocklist (id INT AUTO_INCREMENT PRIMARY KEY, stockname VARCHAR(255), price int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  */
/*

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO stocklist (stockname, price) VALUES ?";
  var values = [
    ['TCS',1020],
    ['INFY',550],
    ['MMTC',15],
    ['RIL',1080],
    ['TATA  MOTORS',450],
    ['AGIRA',100],
    ['YESBANK',60],
    ['ICICI',250]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
*/

/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM stocklist ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

    var json = {}

    json.stock_price = []

    for(r in result) {
      var ch = {
        "org": result[r].stockname,
        "price": result[r].price
      };
      json.stock_price[r] = ch;
    }

    console.log(json)

  });
});
*/


/*
con.connect();

stocks.get('/mydb', function(request, response){
  con.query("SELECT * from  stocklist", function(err,result){
    if (err) throw err;
    console.log(result);
    response.send();
  });
});

stocks.listen(3002,function(){
  console.log('Listning to port 3002');
});
*/




con.connect();

stocks.get('/mydb', function(request, response){
  con.query("SELECT * from  stocklist", function(err,result){
    if(err){
      response.status(400).send('error in fetching the price');
    }else{
      console.log(result);


      var json = {}

      json.stock_price = []

      for(r in result) {
        // var ch = {
        //   "org": result[r].stockname,
        //   "price": result[r].price
        // };

        var ch = {};
        ch[result[r].stockname] = result[r].price;

        json.stock_price[r] = ch;
      }

      console.log(json);

      response.send(json);
    }
  });
});


stocks.listen(3002,function(){
  console.log('Listning to port 3002');
});


/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM stocklist", function (err, result) {
      if (err) throw err;
      console.log(JSON.parse(result));
      stocks.get('/mydb', function(req, res) {
        res.render('index',{data:JSON.parse(result)});

      });

    });
  });


stocks.listen(3011);
console.log("Running at Port 3011");
*/
/*
con.query("desc stocklist",function(err,result){
  if (err) throw err;
  console.log(result);
});
*/
