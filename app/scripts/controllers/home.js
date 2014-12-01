viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./views/home.html",
    controller : 'HomeCtrl'
  });
}]);

viewsModule.controller('HomeCtrl', ['$scope', 'cacCountries', 
                            function($scope,   cacCountries ) {
  cacCountries().then(function(countries) {
  	$scope.countries = [];
    $scope.countries = countries;
   });
}]);
