var settings = require('./settings'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = {
  setup: function (app, baseDir) {
    app.use(express.static(baseDir + '../public/'));
    //app.use(express.favicon());
    app.use(morgan('dev'));
    app.set('port', settings.port);
    app.set('views', baseDir + '../public/views');
    app.set('view engine', 'ejs', { pretty: true });

    //urlencoded and json should be above methodOverride
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
  }
};