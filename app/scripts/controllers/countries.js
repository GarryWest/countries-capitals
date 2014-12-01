viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "./views/countries.html",
    controller : 'CountriesCtrl',
  });
}]);

viewsModule.controller('CountriesCtrl', ['$scope', '$rootScope', 'cacCountries',
                            function($scope, $rootScope,   cacCountries ) {
$scope.loading = true; 
  cacCountries().then(function(countries) {
    $rootScope.countries = countries;
    $scope.loading = false;
   });

}])
