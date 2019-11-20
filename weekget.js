var express = require('express');
var a = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "preethi",
  password: "Preethi@123",
  database: "db"});
con.connect();
a.get('/db/v1/week', function(request, response){
con.query("SELECT user.user_id,week.date,week.status,week.mode,week.time,week.agenda,week.user_id FROM user JOIN week ON user.user_id = week.user_id", function(err,result){
  if(err){
    response.status(400).send('error');
  }else{
     var json = {}
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
    }
    if(result[r].status=='false'){
      ch={}
      ch.user_id=result[r].user_id
      ch.date=result[r].date
      ch.agenda=result[r].agenda
      ch.time=result[r].time
      ch.mode=result[r].mode
      ch.status=result[r].status
      future.push(ch)
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
a.listen(3002,function(){
    console.log("listening to 3002");
});
