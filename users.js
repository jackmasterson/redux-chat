module.exports = (function(userName, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const test = require('assert');
    const bcrypt = require('bcrypt');
    const dotenv = require('dotenv').config();
    // const url = 'mongodb://localhost:27017/';
    const url = process.env.MONGO_DB_DRIVER;
    MongoClient.connect(url, function (err, db) {
        var col = db.db('test').collection('userDatabase');
        const user = userName.user;
        col.findOne({user}, function (err, item) {
            if (!item) {
                callback(false);
                bcrypt.hash(userName.pass, 5, function( err, bcryptedPassword) {
                    let newUser = {user, bcryptedPassword}
                    col.insert(newUser);
                    db.close();
                });
            } else {
                bcrypt.compare(userName.pass, item.bcryptedPassword, function(err, res) {
                    if (res === true) {
                        callback(true);
                        db.close();
                    } else {
                        console.log('incorrect!');
                        db.close();
                    }
                });
                return item;
            }
        })
    });
})