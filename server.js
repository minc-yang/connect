/**
 * Server dependencies
 */

var express  = require('express')
  , passport = require('passport')
  , server   = express()
  ;


/**
 * Configuration
 */

require('./config/server')(server);
require('./config/passport')(passport);


/**
 * Routes
 */

require('./routes/discover')(server);
require('./routes/register')(server);
require('./routes/authorize')(server);
require('./routes/token')(server);
require('./routes/userinfo')(server);
require('./routes/signin')(server);
require('./routes/signup')(server);
require('./routes/signout')(server);
require('./routes/connect')(server);
require('./routes/verify')(server);
require('./routes/error')(server);


/**
 * Start the server
 */

server.start = function () {
  server.listen(server.settings.port, function () {
    console.log(
      'Anvil Connect is running on port ' + server.settings.port
    );
  });
};


/**
 * Exports
 */

module.exports = server;


/**
 * Start the server in shell from development directory
 */

if (!module.parent) {
  server.start()
}
