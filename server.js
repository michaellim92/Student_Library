var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var home =  function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
};
console.log(__dirname);
//registering to login page
app.get('/login',function(req,res) {
    res.sendFile(path.join(__dirname, 'login.html'));
  });
  // path library to build the absolute path in the server

// test route
app.get('/', home);

//for the server to listen to incoming requests
app.listen(3000);