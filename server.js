var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');

app.get('/api/*', function(req, res) {
  var options = {
    url: 'https://www.sfmoma.org' + req.url,
    headers: {
      'Authorization': 'Token 53a64b5ecfc68a27eef8668d33322a09897f1bfe'
    }
  };

  request(options, function (error, response, body) {
    if (error) { throw error; }
    res.json(JSON.parse(body));
  });
});

app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000');
});

module.exports = router;
