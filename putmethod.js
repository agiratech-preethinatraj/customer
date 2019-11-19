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
  test.put("/mydb", function(req, res) {
  var sql =  "UPDATE employee SET address = ('" +req.body.address+ "') WHERE name = ('" +req.body.name+ " ')";
  con.query(sql, function (err, reult) {
      var response = {}
          if(err){
            response.msg = "error"
            res.status(400).send(response);
          }else{
            console.log("one item updated");
            response.msg = "success"
            res.status(200).send(response);
          }
      });
  });

test.listen(3007,function(){
  console.log("listening to 3007");
});

 //var sql = "UPDATE week SET agenda =('"+req.body.agenda+ "') WHERE user_id=('"+req.body.user_id+"') ";
