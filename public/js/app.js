$(function() {
  var socket = io.connect();

});

angular.module('MissionControlApp', [
  'MissionControlApp.controllers',
  'MissionControlApp.services',
  'ngRoute'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when("/example", {templateUrl: "plugin/example/view/example.html", controller: "exampleController"}).
      otherwise({redirectTo: '/example'});
  }]);