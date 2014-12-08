describe("cacAppViews", function() {
  	it('should map routes to controllers', function() {
  		module('cacAppViews');
  		inject(function($route) {
    		expect($route.routes['/countries'].controller).toBe('CountriesCtrl');
    		expect($route.routes['/countries'].templateUrl).toEqual('./views/countries.html');
    		expect($route.routes['/countries/:countryCode'].controller).toBe('CityCtrl');
    		expect($route.routes['/countries/:countryCode'].templateUrl).toEqual('./views/city.html');
    		expect($route.routes['/'].controller).toBe('HomeCtrl');
    		expect($route.routes['/'].templateUrl).toEqual('./views/home.html');
		});
	});
});

