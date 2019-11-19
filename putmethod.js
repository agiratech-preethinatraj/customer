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
  test.put("/mydb", function(req, response) {
  var sql =  "UPDATE employee SET address = " +req.body.address+ " WHERE name = " +req.body.name+ " ";
  con.query(sql, function (err, res) {
  if(err){
      response.status(400).send('error');
      }else{
      console.log("one record updated");
  }
});
});

test.listen(3007,function(){
  console.log("listening to 3007");
});
//PUT API
// app.put("/api/user/:id", function(req , res){
  //              var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    //            executeQuery (res, query);
