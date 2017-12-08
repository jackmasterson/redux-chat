var path = require("path"),
    express = require("express");

var DIST_DIR = path.join(__dirname, "dist"),
    PORT = 3000,
    app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

var server = app.listen(PORT);
var io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    socket.on('opened', () => {
        console.log('socket: ', socket);
        console.log('server side!');
        // make an http request
        // get the users
        // emit a 'users' event
        // send the data back
        // receive it client side
        // wrong
    })
})
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const port = process.env.REACT_APP_PORT || 3000;
// const mongoose = require('mongoose');

// // mongoose.Promise = global.Promise;
// // mongoose.connect('mongodb://localhost/Tododb'); 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const routes = require('./src/api/routes/routes'); //importing route
// routes(app); //register the route


// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);