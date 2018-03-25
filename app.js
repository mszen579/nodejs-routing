// here we will create a routing using express

var express = require('express');// to access the express module
var app = express();


app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
    res.sendfile(__dirname + '/contact.html');
});


app.get('/profile/:name', function (req, res) {
    res.send('You requested too see a profile with the name of ' + req.params.name);
});


app.listen(4000);// to listen to port no. 4000






/*list of important packages:
1- node init: to create a package.json to track all installed packages
2- $ npm install nodemon -g: to install nodemon to make an auto refresh of the node server
3- $ npm install express: to install express routing package for easy routing use*/


