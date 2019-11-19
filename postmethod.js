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
  test.post("/mydb", function(req, res) {
  con.query(' INSERT INTO employee (name, address, country)   values ("'+req.body.name+'","'+req.body.address+'","'+req.body.country+'")', function (err, res) {
  if(err){
    res.status(400).send('error');
    }else{
    console.log("one item added");
  }
});
});

test.listen(3005,function(){
  console.log("listening to 3005");
});
