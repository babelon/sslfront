
var express, server, port;

express = require('express');
server = express.createServer();

server.configure(function() {
  server.use(express.logger('short'));
  server.use(server.router);
});

server.get('/', function(request, response) {
  response.send('Hello secure world!');
  // response.send('<script type="text/javascript" charset="utf-8">window.top.location.href = "http://lietome.babelon.co";</script>');
});

port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Listening on " + port);
});
