var express = require('express');
var bodyParser = require('body-parser');
var foo = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "preethi",
  password: "Preethi@123",
  database: "db"});
foo.use(bodyParser())
con.connect();
foo.use(bodyParser.urlencoded({ extended: true }));
foo.delete("/db/v1", function(req, response) {
  var sql = "DELETE from week WHERE user_id = ('"+req.body.user_id+"')";
  con.query(sql, function (err, result) {
  console.log("test");
  if(err){
    response.status(400).send('error');
    }else{
    console.log("id deleted");
    }
  });
});

foo.listen(3002,function(){
    console.log("listening to 3002");
});
