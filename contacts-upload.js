module.exports = (function(userName, contactName, contactNumber, callback) {
    const MongoClient = require('mongodb').MongoClient;
    const test = require('assert');
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, function (err, db) {
        var col = db.db('myproject').collection(userName);
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