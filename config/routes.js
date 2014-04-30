
var router = require("express").Router()
  , df = require('../app/controllers/default');



/**
 * Routes
 */

module.exports = function (app,con) {

	//home
	app.get("/",function(req,res){

		con.query('SELECT * FROM prueba.pet', function(err, rows, fields) {
		  if (err) throw err;
		  console.log(rows);

		  res.render('./index', { pageTitle: rows});
		});
		

	});
	
}

