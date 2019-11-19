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
foo.post("/db/v1", function(req, res) {
con.query(' INSERT INTO week(user_id,date,agenda,time,mode,status)   values ("'+req.body.user_id+'","'+req.body.date+'","'+req.body.agenda+'","'+req.body.time+'","'+req.body.mode+'","'+req.body.status+'")', function (err, res) {
if(err){
   res.status(400).send('error');
  }else{
  console.log("one item added");
  }
});
});
a.listen(3003,function(){
 console.log("listening to 3003");
});
