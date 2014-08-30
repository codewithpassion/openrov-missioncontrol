angular.module('MissionControlApp.controllers', []).
  controller('exampleController', function($scope) {
    $scope.exampleList = [
      {
        number: 666,
        name: 'The Beast',
        owner: {
          name: 'OpenROV Inc',
          mail: 'info@openrov.com'
        }
      },
      {
        number: 1081,
        name: 'N/A',
        owner: {
          name: 'Dominik Fretz',
          mail: 'dominik@openrov.com'
        }
      }
    ];
  });