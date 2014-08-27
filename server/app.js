var forever = require('forever-monitor');
var child = new forever.Monitor('/opt/openrov/missioncontrol/src/missioncontrol.js', {
    max: 3,
    silent: process.env.NODE_DEBUG === 'false',
    options: [],
    'logFile': '/var/log/openrov.missioncontrol.log',
    'outFile': '/var/log/openrov.missioncontrol.log',
    'errFile': '/var/log/openrov.missioncontrol.err.log'
  });
child.on('exit', function () {
  console.log('missioncontrol.js has exited after 3 restarts');
});
if (process.platform === 'linux') {
  process.on('SIGTERM', function () {
    console.error('got SIGTERM, shutting down...');
    child.stop();
  });
  process.on('SIGINT', function () {
    console.error('got SIGINT, shutting down...');
    child.stop();
  });
}
child.start();
