const express = require('express');
const  mysql = require('mysql');

//Create connection

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : ''
});

//Connect
db.connect(function(err){
  console.log("error con " + err);
  // console.log('Mysql Connected...');
});

const app = express();

//Create DB
app.get('/createdb',function(req,res) {
    let  sql  = 'CREATE DATABASE nodemysql;';
    db.query(sql,function(err, data){
      console.log("error " + err);
      console.log("data " + data);
      // res.send('Database created!!!');
    });
});


app.listen('3002',() =>{
  console.log('i am connected to 3002');
})
