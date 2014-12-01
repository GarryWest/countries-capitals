viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./views/home.html",
    controller : 'HomeCtrl'
  });
}]);

viewsModule.controller('HomeCtrl', [function(){

}]);