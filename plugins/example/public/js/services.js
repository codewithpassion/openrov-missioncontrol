angular.module('MissionControlApp.services', []).
  factory('exampleApiService', function($http) {

    var exampleApi = {};

    exampleApi.getRovs = function() {
      return [
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
      /*return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });*/
    };

    return exampleApi;
  });