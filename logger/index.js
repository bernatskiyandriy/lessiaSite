var winston = require('winston');
var path = require('path');
var ENV = process.env.NODE_ENV;

function getLogger (module){
	var path_module = module.filename.split('/').slice(-2).join('/');
	return new winston.Logger({
		transports:[
			new winston.transports.Console({
				colorize: true,
				level:(ENV == 'development')? 'debug':'error',
				label:path_module
			}),
			new winston.transports.File({ filename: path.join(__dirname, 'Applog.log') })
		]
	});

}
module.exports = getLogger;