var config = require('./config'),
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  path = require('path'),
  loader = require('openrov-pluginloader')()
;

// Keep track of plugins js and css to load them in the view
var assets = {
  scripts: [],
  styles: []
};

config.express.setup(app, __dirname + '/');
config.routes.setup(app, assets);

var deps = {
  server: server,
  app: app,
  io: io,
  socket: undefined
};

io.sockets.on('connection', function (socket) {
  deps.socket = socket;
});

// Load the plugins
loader.loadPlugins(path.join(__dirname, '../plugins'), '/plugin', deps, addPluginAssets);

server.listen(config.settings.port, function() {
  console.log('Started listening on port: ' + config.settings.port);
});

function addPluginAssets(result) {
  assets.scripts = assets.scripts.concat(result.scripts);
  assets.styles = assets.styles.concat(result.styles);
  result.assets.forEach(
    function(asset) {
      app.use(asset.path, express.static(asset.assets));
    });
}
