// here we will create a routing
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) { 
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') { //'/home' means if going to hoem page
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } 
    else if (req.url === '/contact-us') {//'/contact' means if going to contact page
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if (req.url === '/api'){ //sending JSON info
        var api = [{ name: 'mohammad', age: 39 }, { name: 'Diana', age: 30 }];
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(api));
    } 
    else{ //if we request a 'not found page'
        res.writeHead(404, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(4000, '127.0.0.1');
console.log('now we are listening to port 4000');



/*list of important packages:
1- node init: to create a package.json to track all installed packages
2- $ npm install nodemon -g: to install nodemon to make an auto refresh of the node server
3- $ npm install express: to install express routing package for easy routing use
