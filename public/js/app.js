$(function() {
  var socket = io.connect();

});

angular.module('MissionControlApp', [
  'MissionControlApp.controllers',
  'MissionControlApp.services',
  'MissionControlApp.subModules',
  'ngRoute'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      otherwise({redirectTo: '/example'});
  }]);