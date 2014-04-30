crypto = require('crypto');

exports.salt = function(length){/*
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < length; i++ ){
	
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;*/
	return crypto.randomBytes(length).toString('base64');
}

exports.hash = function (pass, salt) {
        
        return crypto.createHash('sha1').update(pass).update(salt).digest('base64');
  };