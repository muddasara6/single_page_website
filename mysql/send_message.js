// Get express module
var express = require('express');
// Create an express application
var app = express();
// Get mysql module
var mysql = require('mysql');
// Get body-parser module
var bodyParser = require('body-parser');
// Extracts the entire body portion of an incoming request
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Parses JSON encoded data submitted using HTTP post request
app.use(bodyParser.json());
// Use middleware to parse JSON data
app.use(bodyParser.urlencoded({extended: false}));
// Get static files such as images, CSS files, and JavaScript files
app.use('/', express.static(__dirname + '/'));

// Create connection to MySQL
var connection = mysql.createConnection({
    // IP address on the server
    host: "localhost",
    // Username
    user: "muddasara6",
    // Password
    password: "MUDD454R",
    // Name of the database
    database: "mywebsite"
});

// Connect to database
connection.connect();

app.get('/', function(req, res) {
    connection.query("SELECT * FROM chat", function(err, result) {
        if(err) throw err;
        //Work through results
        result.forEach(function (chat) {
            console.log("--------- Chat ----------");
            console.log("ID: " + chat.ID);
            console.log("Name: " + chat.Name);
            console.log("Message: " + employee.Message);
            console.log();
        });
        res.send(JSON.stringify(result[0].Message));
    });
});

// POST method route
app.post('/', function(req, res) {
    // Extracts data of name from HTML
    var chatName = req.body.name;
    // Extracts data of message from HTML
    var chatMessage = req.body.message;
    // Insert the data into MySQL database
    connection.query("INSERT INTO `chat` (Name, Message) VALUES (?,?)", [chatName.toString(), chatMessage.toString()], function(err, result) {
        // If there is an error, throw it
        if(err) throw err;
        // Output results
        console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
    });
    // Send file to index.html and open page
    res.sendFile(__dirname + '/index.html');
});

// Port listens to 3000 for connection
app.listen(3000, function () {
    // Output result if its connected
    console.log('Connected to port 3000');
});