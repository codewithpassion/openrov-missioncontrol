angular.module('MissionControlApp.Example', [
  'ngRoute'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when("/example", {templateUrl: "plugin/example/view/example.html", controller: "exampleController"});
  }]);