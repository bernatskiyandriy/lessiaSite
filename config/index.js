var nconf = require('nconf');
//var fs    = require('fs');
var path = require('path');

nconf.argv()
   .env()
   .file({ file: path.join(__dirname,'config.json') });

module.exports = nconf;