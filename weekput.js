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
foo.put("/db/v1", function(req, res) {
  var sql = "UPDATE week SET agenda =('"+req.body.agenda+ "') WHERE user_id=('"+req.body.user_id+"') ";
  con.query(sql, function (err, result) {
  var response = {}
    if(err){
      response.msg = "error"
      res.status(400).send(response);
    }else{
      response.msg = ("no of item updated:"+result.affectedRows)
      res.status(200).send(response);
    }
  });
});

foo.listen(3002,function(){
    console.log("listening to 3002");
});
