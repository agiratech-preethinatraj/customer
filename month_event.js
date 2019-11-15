var  express = require('express');
var test = express();

var mysql= require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user:"root",
  database: "mydb"
});

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE events (user_id varchar(255),date date, agenda VARCHAR(255),start_time time,end_time time, mode varchar(255),status varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
*/


//"CREATE TABLE week(userid varchar(100),date date, agenda VARCHAR(255),time int, mode varchar(100),status varchar(100))";

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO events (user_id,date,agenda,start_time,end_time, mode,status) VALUES ?";
  var values=[
        ['u1','2019-11-01', 'meditation','6:30:00','7:30:00','silent','true'],
        ['u1','2019-11-01', 'meditation','6:30:00','7:30:00','silent','true'],
        ['u1','2019-11-01', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u1','2019-11-01', 'ytnext','3:30:00','4:30:00','silent','true'],
        ['u2','2019-11-01', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u2','2019-11-01', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-01', 'temple','6:30:00','7:30:00','general','false'],
        ['u3','2019-11-01', 'meeting','6:30:00','7:30:00','silent','false'],
        ['u3','2019-11-01', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u1','2019-11-02', 'temple','6:30:00','7:30:00','general','true'],
        ['u1','2019-11-03', 'meditation','6:30:00','7:30:00','silent','true'],
        ['u1','2019-11-03', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u1','2019-11-03', 'ytnext','3:30:00','4:30:00','silent','true'],
        ['u2','2019-11-03', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u2','2019-11-03', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-03', 'temple','6:30:00','7:30:00','general','true'],
        ['u3','2019-11-03', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u3','2019-11-03', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-03', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-03', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u1','2019-11-04', 'meditation','6:30:00','7:30:00','silent','true'],
        ['u1','2019-11-04', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u1','2019-11-04', 'ytnext','3:30:00','4:30:00','silent','true'],
        ['u2','2019-11-04', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u2','2019-11-04', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-04', 'temple','6:30:00','7:30:00','general','true'],
        ['u3','2019-11-04', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u3','2019-11-04', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-04', 'ytnextup','6:30:00','7:30:00','silent',' false'],
        ['u4','2019-11-04', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u1','2019-11-05', 'meditation','6:30:00','7:30:00','silent','true'],
        ['u1','2019-11-05', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u1','2019-11-05', 'ytnext','3:30:00','4:30:00','silent','false'],
        ['u2','2019-11-05', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u2','2019-11-05', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-05', 'temple','6:30:00','7:30:00','general','true'],
        ['u3','2019-11-05', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u3','2019-11-05', 'ytnextup','6:30:00','7:30:00','silent',' false'],
        ['u4','2019-11-05', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-05', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u1','2019-11-06', 'meditation','6:30:00','7:30:00','silent','false'],
        ['u1','2019-11-06', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-06', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-06', 'temple','6:30:00','7:30:00','general','true'],
        ['u3','2019-11-06', 'meeting','6:30:00','7:30:00','silent','true'],
        ['u3','2019-11-06', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-06', 'ytnextup','6:30:00','7:30:00','silent',' false'],
        ['u4','2019-11-06', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u1','2019-11-07', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-07', 'conference','9:30:00','10:30:00','silent',' false'],
        ['u3','2019-11-07', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-07', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-07', 'meeting','9:30:00','10:30:00','silent',' false'],
        ['u1','2019-11-10', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-10', 'conference','9:30:00','10:30:00','silent',' false'],
        ['u3','2019-11-10', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-10', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-10', 'meeting','9:30:00','10:30:00','silent',' false'],
        ['u4','2019-11-11', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u1','2019-11-15', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-15', 'conference','9:30:00','10:30:00','silent',' false'],
        ['u3','2019-11-15', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-15', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-15', 'meeting','9:30:00','10:30:00','silent',' false'],
        ['u1','2019-11-17', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-17', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-17', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-17', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-17', 'meeting','9:30:00','10:30:00','silent',' false'],
        ['u1','2019-11-21', 'road_trip','11:30:00','12:30:00','general','true'],
        ['u2','2019-11-21', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-21', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-21', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-21', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u2','2019-11-21', 'conference','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-21', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-21', 'ytnextup','6:30:00','7:30:00','silent',' true'],
        ['u4','2019-11-21', 'meeting','9:30:00','10:30:00','silent',' true'],
        ['u3','2019-11-25', 'temple','6:30:00','7:30:00','general','true'],
        ['u4','2019-11-25', 'ytnextup','6:30:00','7:30:00','silent',' false'],
        ['u2','2019-11-30', 'conference','9:30:00','10:30:00','silent',' true'],

];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
*/

/*

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.user_id,events.date,events.agenda,events.user_id FROM users JOIN events ON users.user_id = events.user_id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

*/

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO events (user_id,date,agenda,start_time,end_time, mode,status) VALUES ?";
  var values=[
        ['u4','2019-11-14', 'meditation','10:30:00','11:30:00','silent','null'],
      ];
        con.query(sql,[values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
  });
});
*/


test.get('/mydb/y1', function(request, response){
  con.query("SELECT * from events", function(err,result){
    if(err){
      response.status(400).send('error');
    }else{
      //console.log(result);

      var json ={}
      var status = {}

      past = []
      present = []
      future = []


      for (r in result){
        if(result[r].status == 'true'){
          ch = {}
          ch.user_id  = result[r].user_id;
          ch.date     = result[r].date;
          ch.agenda   = result[r].agenda;
          ch.start_time = result[r].start_time;
          ch.end_time = result[r].end_time;
          ch.mode     = result[r].mode;
          ch.status   = result[r].status;
          past.push(ch);
          //json.past[r] = ch
          console.log(ch)
        }

        if(result[r].status == 'null'){
          ch = {}
          ch.user_id  = result[r].user_id;
          ch.date     = result[r].date;
          ch.agenda   = result[r].agenda;
          ch.start_time = result[r].start_time;
          ch.end_time = result[r].end_time;
          ch.mode     = result[r].mode;
          ch.status   = result[r].status;
          present.push(ch)
          //json.future[r] = ch
          console.log(ch)
        }

        if(result[r].status == 'false'){
          ch = {}
          ch.user_id  = result[r].user_id;
          ch.date     = result[r].date;
          ch.agenda   = result[r].agenda;
          ch.start_time = result[r].start_time;
          ch.end_time = result[r].end_time;
          ch.mode     = result[r].mode;
          ch.status   = result[r].status;
          future.push(ch)
          //json.present[r] = ch;
          console.log(ch)
        }
      }
      json.month ={}

      json.month.past = past;
      json.month.present = present;
      json.month.future = future;
      console.log(json);
      response.send(json);

  };
});
});


test.listen(3023 ,function(){
  console.log('Listning to port 3023')
});
