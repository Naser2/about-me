
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 8080));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


// Test
// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/'));
//
// app.listen(process.env.PORT || 8080), function() {
//   console.log('listening on *:8080');
// });
