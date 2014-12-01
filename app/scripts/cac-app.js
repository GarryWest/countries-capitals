angular.module('cacApp', ['cacAppViews', 'ngRoute', 'ngAnimate'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/'
    });
  }])
