angular.module('F1FeederApp.controllers', []).

/* Drivers controller */
controller('driversController', function($scope, ergastAPIservice) {
  $scope.nameFilter = null;
  $scope.driversList = [];

 
  ergastAPIservice.getDrivers().then(function mySuccess (response) {
      //Dig into the responde to get the relevant data
      debugger;
      $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  }, function myError(response){
        alert(response);
  });

  $scope.searchFilter = function (driver) {
    debugger;
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };
}).

/* Driver controller */
controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    debugger;
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergastAPIservice.getDriverDetails($scope.id).then(function mySuccess(response) {
      debugger;
      $scope.driver = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    }, function myError(response){
    alert(response);
    });

  ergastAPIservice.getDriverRaces($scope.id).then(function mySuccess(response) {
      debugger;
      $scope.races = response.data.MRData.RaceTable.Races; 
  }, function myError(response){
    alert(response);
  }); 
});;