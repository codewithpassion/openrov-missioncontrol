var argv = require('optimist').argv;
module.exports = {
  port: process.env.PORT || argv.port || 8080
};
