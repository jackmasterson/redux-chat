module.exports = (function(userName, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const test = require('assert');
    const bcrypt = require('bcrypt');
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, function (err, db) {
        var col = db.db('myproject').collection('userDatabase');
        const user = userName.user;
        col.findOne({user}, function (err, item) {
            if (!item) {
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