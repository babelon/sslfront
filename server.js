
var express, server, port;

express = require('express');
server = express.createServer();

server.configure(function() {
  server.use(express.logger('short'));
  server.use(server.router);
});

server.get('/', function(req, res) {
  res.redirect('http://lietome.babelon.co');
  // res.send('<script type="text/javascript" charset="utf-8">window.top.location.href = "http://lietome.babelon.co";</script>');
});

port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Listening on " + port);
});
