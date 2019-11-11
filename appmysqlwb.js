var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yuvi'
});

// connection.connect();
connection.connect(function(err){
  console.log("error con " + err);
  // console.log('Mysql Connected...');
});

connection.query('desc persons', function (error, results, fields) {
  if (error) throw error;
  console.log('output ', results);
});

/*
sql="INSERT INTO persons VALUES (1,"Yuvaraj","Magesh","Kolathur","Chennai")";
connection.query(function (error,results,){
  if(error) throw error;
  console.log("1 record is succefully inserted");
});
*/
  connection.end();
