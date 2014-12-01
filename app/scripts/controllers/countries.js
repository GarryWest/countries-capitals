viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "./views/countries.html",
    controller : 'CountriesCtrl',
  });
}]);

viewsModule.controller('CountriesCtrl', ['$rootScope', 'cacCountries',
                            function($rootScope,   cacCountries ) {
 
  cacCountries().then(function(countries) {
    $rootScope.countries = countries;
   });

}])
