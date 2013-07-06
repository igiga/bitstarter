var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  DATAbuf = new Buffer(256);
  fs.readFile('index.html', function(err, DATAbuf) {
      if (err) throw err;
  });
  response.send(DATAbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
