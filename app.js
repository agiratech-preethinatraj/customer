var express = require('express');
var app = express();

var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydb'
});

conn.connect();

app.get('/mydb', function(request, response){
    conn.query('select * from stocklist', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});
