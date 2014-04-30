/**
 * Module dependencies
 */

var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , mysql = require("mysql")
  , rootpath = __dirname
  ;


// db Connection
var con = mysql.createConnection({
	  host     : "localhost",
	  user     : "root",
	  password : "1234",
	});




// Configuration

//require('./config/express')(app,rootpath,passport)
require('./config/express')(app,rootpath)

//require('./config/socket')(app,io,rootpath)
//require('./config/routes')(app,passport);

require('./config/routes')(app,con);

//Start server
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


