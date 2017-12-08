module.exports = (function(userName, contactName, contactNumber, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const test = require('assert');
    const dotenv = require('dotenv').config();
    const url = process.env.MONGO_DB_DRIVER;

    MongoClient.connect(url, function (err, db) {
        var col = db.db('test').collection(userName);
        col.findOne({contactName}, (err, item) => {
            let cont = {contactName, contactNumber};
            if (!item) {
                col.insert(cont);
                // callback()
                db.close();
            } else {
                // callback();
                db.close();
            }
        });
    });
})