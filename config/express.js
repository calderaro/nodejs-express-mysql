
var connect = require('connect')
  , path = require('path') 
  , util = require('util')
  , crypto = require('../app/modules/crypto')
  ;


module.exports = function (app,rootpath, mysql) {
    

	// all environments

	app.set('port', process.env.PORT || 3000);
	app.set('views', rootpath+'/app/views');
	app.engine('jade', require("jade").__express);
	app.set('view engine', 'jade');
	app.use(connect.logger('dev'));
	app.use(connect.json());
	app.use(connect.urlencoded());
	app.use(connect.cookieParser());
  app.use(connect.session({ secret: 'ponies' }));


  app.use(connect.static(path.join(rootpath+'/public'), { maxAge: 86400000 }));
	

	// development only
	if (app.get('env') === 'development') {
	  app.use(connect.errorHandler());
	}

	// production only
	if (app.get('env') === 'production') {
	  // TODO
	};

	
}
