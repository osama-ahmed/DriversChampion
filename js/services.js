angular.module('F1FeederApp.services', []).
factory('ergastAPIservice', function($http) {

  var ergastAPI = {};

  ergastAPI.getDrivers = function() {
    return $http({
      method: 'JSONP', 
      url: 'http://ergast.com/api/f1/2013/driverStandings.json'
    });
  }

  ergastAPI.getDriverDetails = function(id) {
    return $http({
      method: 'JSONP', 
      url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json'
    });
  }

  ergastAPI.getDriverRaces = function(id) {
    return $http({
      method: 'JSONP', 
      url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json'
    });
  }

  return ergastAPI;
});