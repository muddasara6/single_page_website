var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/'));

var connection = mysql.createConnection({
    host: "localhost",
    user: "muddasara6",
    password: "MUDD454R",
    database: "mywebsite"
});

connection.connect();

app.post('/', function(req, res) {
    var noteTitle = req.body.title;
    var noteText = req.body.notes;
    connection.query("INSERT INTO `note` (Title, Notes) VALUES (?,?)", [noteTitle.toString(), noteText.toString()], function(err, result) {
        if(err) throw err;
        //Output results
        console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
    });
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('Connected to port 3000');
});