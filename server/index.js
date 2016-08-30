; (function () {

  let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    routes = require('./server-assets/routes/index'),
    server = express(),
    port = process.env.PORT || 9999;

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.use('/', express.static(`${__dirname}/public/animals/`));
  

  var whitelist = ['http://localhost:8081']; //
  var corsOptions = {
    origin: function (origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  server.use('/api', cors(corsOptions), routes.router)


  server.listen(port, function () {
    console.log(`Warming Up Roars on Port: ${port}`);
  })



} ());