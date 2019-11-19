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
  test.delete("/mydb", function(req,res) {
  var sql =  "DELETE from employee WHERE address = ('"+req.body.address+"')";
  con.query(sql, function (err,result) {
      var response = {}
        if(err){
          response.msg = "error"
          res.status(400).send(response);
        }else{
          console.log("one item deleted");
          response.msg = "delete"
          res.status(200).send(response);
        }
      });
  });

test.listen(3007,function(){
  console.log("listening to 3007");
});
