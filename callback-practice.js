var request = require('request');

var getSingleUsername = function(userId, callback) {
  request('https://jsonplaceholder.typicode.com/users/' + userId, function(err, response, body) {
    if (err) {
      callback(err, null);
      return;
    }
    var username = JSON.parse(body).username;
    callback(null, username);
  });
};

var getUsernames = function(userIds, callback) {
  var arr = [];
  var counter = 0;
    for (var i = 0; i < userIds.length; i++){
    getSingleUsername(userIds[i], function(err, username){
      if (err){
        callback(err, null)
        return;
       }
     arr.push(username);
     counter++
     if (counter === userIds.length){
     callback(null, arr);
     }
    })
   }
};

module.exports = {
  getUsernames:getUsernames};
