var express = require('express');
var app = express();

server.use(express.static(__dirname + '/'));

server.listen(process.env.PORT || 8080), function(){
  console.log('listening on *:8080');
});
