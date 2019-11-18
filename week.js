var express = require('express');
var a = express();
//var auth = require('connect-auth')

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "preethi",
  password: "Preethi@123",
  database: "db"});
  /*var s = "CREATE TABLE week  (user_id varchar(100),date date, agenda VARCHAR(255),time time, mode varchar(100),status varchar(100))";
   con.query(s, function (err, result) {
   if (err) throw err;
   console.log("Table created");
  });




  var s = "INSERT INTO week(user_id,date,agenda,time,mode,status) VALUES ?";
  var values = [
        ['u1','2019-11-11', 'meditation','6:30:00','silent','true'],
        ['u1','2019-11-11', 'meditation','6:30:00','silent','true'],
        ['u1','2019-11-11', 'road_trip','11:30:00','general','true'],
        ['u1','2019-11-11', 'ytnext','3:30:00','silent','true'],
        ['u2','2019-11-11', 'meeting','6:30:00','silent','true'],
        ['u2','2019-11-11', 'conference','9:30:00','silent',' true'],
        ['u3','2019-11-11', 'temple','6:30:00','general','true'],
        ['u3','2019-11-11', 'meeting','6:30:00','silent','true'],
        ['u3','2019-11-11', 'ytnextup','6:30:00','silent',' true'],
        ['u1','2019-11-12', 'temple','6:30:00','general','true'],
        ['u1','2019-11-12', 'meditation','6:30:00','silent','true'],
        ['u1','2019-11-12', 'road_trip','11:30:00','general','true'],
        ['u1','2019-11-12', 'ytnext','3:30:00','silent','true'],
        ['u2','2019-11-12', 'meeting','6:30:00','silent','true'],
        ['u2','2019-11-12', 'conference','9:30:00','silent',' true'],
        ['u3','2019-11-12', 'temple','6:30:00','general','true'],
        ['u3','2019-11-12', 'meeting','6:30:00','silent','true'],
        ['u3','2019-11-12', 'ytnextup','6:30:00','silent',' true'],
        ['u4','2019-11-12', 'ytnextup','6:30:00','silent',' true'],
        ['u4','2019-11-12', 'meeting','9:30:00','silent',' true'],
        ['u1','2019-11-13', 'meditation','6:30:00','silent','true'],
        ['u1','2019-11-13', 'road_trip','11:30:00','general','true'],
        ['u1','2019-11-13', 'ytnext','3:30:00','silent','true'],
        ['u2','2019-11-13', 'meeting','6:30:00','silent','true'],
        ['u2','2019-11-13', 'conference','9:30:00','silent',' true'],
        ['u3','2019-11-13', 'temple','6:30:00','general','true'],
        ['u3','2019-11-13', 'meeting','6:30:00','silent','true'],
        ['u3','2019-11-13', 'ytnextup','6:30:00','silent',' true'],
        ['u4','2019-11-13', 'ytnextup','6:30:00','silent','true '],
        ['u4','2019-11-13', 'meeting','9:30:00','silent',' true'],
        ['u1','2019-11-14', 'meditation','6:30:00','silent','null'],
        ['u1','2019-11-14', 'road_trip','11:30:00','general','null'],
        ['u1','2019-11-14', 'ytnext','3:30:00','silent','null'],
        ['u2','2019-11-14', 'meeting','6:30:00','silent','null'],
        ['u2','2019-11-14', 'conference','9:30:00','silent','null'],
        ['u3','2019-11-14', 'temple','6:30:00','general','null'],
        ['u3','2019-11-14', 'meeting','6:30:00','silent','null'],
        ['u3','2019-11-14', 'ytnextup','6:30:00','silent',' null'],
        ['u4','2019-11-14', 'ytnextup','6:30:00','silent',' null'],
        ['u4','2019-11-14', 'meeting','9:30:00','silent','null'],
        ['u1','2019-11-15', 'meditation','6:30:00','silent','false'],
        ['u1','2019-11-15', 'road_trip','11:30:00','general','false'],
        ['u2','2019-11-15', 'conference','9:30:00','silent',' false'],
        ['u3','2019-11-15', 'temple','6:30:00','general','false'],
        ['u3','2019-11-15', 'meeting','6:30:00','silent','false'],
        ['u3','2019-11-15', 'ytnextup','6:30:00','silent',' fase'],
        ['u4','2019-11-15', 'ytnextup','6:30:00','silent',' false'],
        ['u4','2019-11-15', 'meeting','9:30:00','silent',' false'],
        ['u1','2019-11-16', 'road_trip','11:30:00','general','false'],
        ['u2','2019-11-16', 'conference','9:30:00','silent',' false'],
        ['u3','2019-11-16', 'temple','6:30:00','general','false'],
        ['u4','2019-11-16', 'ytnextup','6:30:00','silent',' false'],
        ['u4','2019-11-16', 'meeting','9:30:00','silent',' false'],
        ['u1','2019-11-16', 'road_trip','11:30:00','general','false'],
        ['u2','2019-11-16', 'conference','9:30:00','silent',' false'],
        ['u3','2019-11-16', 'temple','6:30:00','general','false'],
        ['u4','2019-11-16', 'ytnextup','6:30:00','silent',' false'],
        ];


        con.query(s, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });*/

      con.connect();

        a.get('/db/v1/week', function(request, response){

          con.query("SELECT user.user_id,week.date,week.status,week.mode,week.time,week.agenda,week.user_id FROM user JOIN week ON user.user_id = week.user_id", function(err,result){

            if(err){
              response.status(400).send('error');
            }else{
              //console.log(result);


              var json = {}
            //  var status={}

              past=[]
              present=[]
              future=[]

              for(r in result){
                if(result[r].status=='true'){
                  ch={}
                  ch.user_id=result[r].user_id
                  ch.date=result[r].date
                  ch.agenda=result[r].agenda
                  ch.time=result[r].time
                  ch.mode=result[r].mode
                  ch.status=result[r].status
                  past.push(ch)
                  // json.past[r]=ch
                  console.log(past)
                }
                if(result[r].status=='null'){
                  ch={}
                  ch.user_id=result[r].user_id
                  ch.date=result[r].date
                  ch.agenda=result[r].agenda
                  ch.time=result[r].time
                  ch.mode=result[r].mode
                  ch.status=result[r].status
                  present.push(ch)
                  // json.present[r]=ch
                }
                if(result[r].status=='false'){
                  console.log('false');
                  ch={}
                  ch.user_id=result[r].user_id
                  ch.date=result[r].date
                  ch.agenda=result[r].agenda
                  ch.time=result[r].time
                  ch.mode=result[r].mode
                  ch.status=result[r].status
                  future.push(ch)
                  // json.future[r]=ch

                }

              }

              json.week = {}

              json.week.past=past
              json.week.present=present
              json.week.future=future

              console.log(json);
              response.send(json);


}
});
});
a.listen(3003,function(){
   console.log("listening to 3003");
 });
