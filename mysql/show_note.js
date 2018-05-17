var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({
    host: "localhost",
    user: "muddasara6",
    password: "MUDD454R",
    database: "mywebsite"
});

app.get('/',(req, res) => {
    connection.connect(function(err) {
    if(err) throw err;
        else {
            connection.query("SELECT * FROM note",(err, result) => {
                if(err) {
                    console.log(err); 
                    res.json({"error":true});
                }
                else { 
                    console.log(result); 
                    res.json(result); 
                }
            });
        }
    });
});

app.listen(3000, function () {
    console.log('Connected to port 3000');
});