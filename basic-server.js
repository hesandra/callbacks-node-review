var express = require('express');
var getUsernames = require('./callback-practice').getUsernames;
var server = express();
var bodyParser = require('body-parser');

server.get('/users', function(req, res){
getUsernames([1,2,3,4,5,6], function(err, users) {
res.send(users)
 })
})
server.listen(3000);



