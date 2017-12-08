const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "dist");
const PORT = 3000;
const app = express();

const users = require('./users');
const contacts = require('./contacts');
const contactsUpload = require('./contacts-upload');

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
        if (exists) {
            socket.emit('exists', true);
        }
    }
    socket.on('opened', (res) => {
        console.log('server side for login!');
        users(res, userExists);
    });

    socket.on('contacts', (res) => {
        const callback = ((contacts) => {
            socket.emit('contacts-retrieved', contacts);
        })
        contacts(res, callback);
    });

    socket.on('contact-upload', (res) => {
        console.log('server side for contacts-upload!', res);
        const callback = function() {
            console.log('callback for contacts-upload');
        }
        contactsUpload(res.user, res.number.named, res.number.number, callback);
    });

    socket.on('send-message', (res) => {
        console.log('server side for send message with res: ', res);
    })

});