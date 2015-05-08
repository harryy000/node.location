var mongoose = require('mongoose');
var async = require('async');
var mylocations = require('./models.js');

var dbUrl = 'mongodb://localhost:27030/loc';
/*var connect = function() {
    
    mongoose.connect(dbUrl, options);
};
connect();
*/
var options = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
}
var connect = function(cb) {
    mongoose.connect(dbUrl, function() {
        async.series([cb, findurcord], function(results) {
            console.log('Distance is', results.documents[0].results[0].dis,'kms');
        });
    });
}
connect(function(callback) {
    var data = new mylocations({
        loc: [process.argv[2], process.argv[3]]
    });
    data.save(function(err, result) {
        return callback();
    });
});
function findurcord(callback) {
    var dest = [parseFloat(process.argv[4]), parseFloat(process.argv[5])];
    mongoose.connection.db.executeDbCommand({
        geoNear: 'mylocations',
        near: dest,
        spherical: true,
        distanceMultiplier: 6371
            //maxDistance: 2 / 6371
    }, function(err, data) {
        return callback(data);
    });
}