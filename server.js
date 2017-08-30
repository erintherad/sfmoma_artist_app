var express = require('express');
var app = express();

// Allows app to use external js files
app.use(express.static('public'));

app.get('/api/*', function(req, res) {
  console.log('got request');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
