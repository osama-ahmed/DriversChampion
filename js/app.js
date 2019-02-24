angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'ngRoute'
]).
config(
function ($routeProvider, $sceDelegateProvider)  {  

  $routeProvider.
  when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
  when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/drivers'});

  $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain. **.
      'http://ergast.com/**'
    ]);

   
  });
