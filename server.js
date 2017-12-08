const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "dist");
const PORT = 3000;
const app = express();

const users = require('./users');

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

const server = app.listen(PORT);
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    const userExists = function (exists) {
        console.log('exists: ', exists);
        if (exists) {
            console.log('password!', exists);
            socket.emit('exists', true);
        }
    }
    socket.on('opened', (res) => {
        console.log('server side!');
        users(res, userExists);
    });

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