var winston = require('winston');
var path = require('path');
var ENV = process.env.NODE_ENV;

function getLogger (module){
	var path_module = module.filename;
	return new winston.Logger({
		transports:[
			new winston.transports.Console({
				colorize: true,
				level:(ENV == 'development')? 'debug':'error',
				label:path_module
			}),
			new winston.transports.File({ 
				name: 'info-file',
			    filename: path.join(__dirname, 'ApplogInfo.log') ,
			    level: 'info',
			    label:path_module
			}),
			new winston.transports.File({ 
				name: 'error-file',
			    filename: path.join(__dirname, 'ApplogError.log') ,
			    level: 'error',
			    label:path_module
			})
		]
	});

}
module.exports = getLogger;