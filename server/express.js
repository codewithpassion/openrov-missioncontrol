/**
* Module dependencies.
*/
var express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    config = require('./config');

module.exports = function(app) {

    // Configure Server
    //Prettify HTML
    app.locals.pretty = true;

    //Logs to the console when the server has a request.
    app.use(morgan('dev'));

    //Setting the fav icon and static folder
    //app.use(favicon());
    app.use(express.static(config.root + '/public'));

    //Set views path, template engine and default layout.
    app.set('views', config.root + '/server/views');
    app.set('view engine', 'ejs');

    //urlencoded and json should be above methodOverride
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //app.use(methodOverride());

    //Additional Config for 'Development' Environment
    if (process.env.NODE_ENV === 'development') {
        console.log('Development mode');
    }

    //Additional Config for 'Production' Environment
    if (process.env.NODE_ENV === 'production') {
        console.log('Production mode');
        //View templates templates will be cached in production environment.
        app.set('view cache', true );
        //Sends compressed version of json,css,html,text in production.
        app.use(express.compress());
    }

};
