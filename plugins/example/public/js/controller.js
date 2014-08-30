angular.module('MissionControlApp.controllers', []).
  controller('exampleController', function($scope, exampleApiService) {
    $scope.exampleList = exampleApiService.getRovs();
  });