var express = require('express');
  var bodyParser = require('body-parser');
  var test = express();
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"});

  test.use(bodyParser())
  con.connect();
  test.use(bodyParser.urlencoded({ extended: true }));
  test.delete("/mydb", function(req, res) {
  var sql =  "DELETE from employee WHERE name = ('"+req.body.name+"')";
  con.query(sql, function (err, res) {
  if(err){
    res.status(400).send('error');
    }else{
    console.log("one item deleted");
  }
});
});

test.listen(3005,function(){
  console.log("listening to 3005");
});
