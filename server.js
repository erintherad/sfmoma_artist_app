var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');

require('dotenv').config();

app.get('/api/*', function(req, res) {
  var options = {
    url: 'https://www.sfmoma.org' + req.url,
    headers: {
      'Authorization': process.env.API_KEYS
    }
  };

  request(options, function (error, response, body) {
    if (error) { throw error; }
    res.json(JSON.parse(body));
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000');
});

module.exports = router;
