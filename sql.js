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
  var sql = "UPDATE customers  SET address = 'ch' where address = 'ct'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result.affectedRow + "Number of records updated");
  });
});
*/

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT address FROM customers LIMIT 4", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    for(a in result) {
      console.log(result[a].address)
    }
  });
});

con.query("desc customers",function(err,result){
  if (err) throw err;
  console.log(result);
});


/*con.connect(function(err) {
  if (err) throw err;
  console.log("connected!");
  var sql ="INSERT INTO customers (name,address) VALUES ?";
  var values =[
    ["yuvi","ma"],
    ["john", "value way"],
    ["ashly","ct"]
  ];
  con.query(sql,[values], function (err,result){
    if (err) throw err;
    console.log("numbers of records inserted:" + result.affectedRows);
  });
});
*/
