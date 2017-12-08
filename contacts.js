module.exports = (function(userName, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const test = require('assert');
    const dotenv = require('dotenv').config();
    const url = process.env.MONGO_DB_DRIVER;

    MongoClient.connect(url, function (err, db) {
        var col = db.db('test').collection(userName.user);
        const user = userName.user;
          col.find({}).toArray(function(err, result) {
            if (err) {
                console.log('err: ', err);
                db.close();
            } else {
                callback(result);
                db.close();
            }
        });
    });
})