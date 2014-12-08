describe("cacCountries", function(){

    beforeEach(module("cacLibrary"));

    var service;

    beforeEach(inject(function(cacCountries, _$httpBackend_){
       service = cacCountries;
       $httpBackend = _$httpBackend_;
    }));

    describe("getCountries", function(){
        it("should return an array of items", function(){
        	$httpBackend.whenGET('http://api.geonames.org/countryInfo?username=garrywest').respond([{
        		id: 1,
        		name: 'banana'
        	}]);
            expect(service()).toBeDefined();
        });
    });
});

describe("cacFindCountry", function(){

  beforeEach(module("cacLibrary"));

  var cacRequest, $httpBackend, $q, $rootScope;

  beforeEach(inject(function (_cacRequest_, _$httpBackend_, _$q_, _$rootScope_) {
    cacRequest = _cacRequest_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    $rootScope = _$rootScope_;

    // expect the actual request
    $httpBackend.expect('GET', 'http://api.geonames.org/searchJSON?country=NA&featureCode=PPLC&username=garrywest');

    // react on that request
    $httpBackend.whenGET('http://api.geonames.org/searchJSON?country=NA&featureCode=PPLC&username=garrywest').respond({
      success: {
        elements: [1, 2, 3]
      }
    });
  }));

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return a promise', function () {
   
    var promise = cacRequest.getData('/searchJSON?country=NA&featureCode=PPLC');
    
    $httpBackend.flush();
    expect(promise.then).toBeDefined();
  });

});

describe("cacFindNeighbors", function(){

  beforeEach(module("cacLibrary"));

  var cacRequest, $httpBackend, $q, $rootScope;

  beforeEach(inject(function (_cacRequest_, _$httpBackend_, _$q_, _$rootScope_) {
    cacRequest = _cacRequest_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    $rootScope = _$rootScope_;

    // expect the actual request
    $httpBackend.expect('GET', 'http://api.geonames.org/neighboursJSON?country=NA&username=garrywest');

    // react on that request
    $httpBackend.whenGET('http://api.geonames.org/neighboursJSON?country=NA&username=garrywest').respond({
      success: {
        elements: [1, 2, 3]
      }
    });
  }));

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return a promise', function () {
   
    var promise = cacRequest.getData('/neighboursJSON?country=NA');
    
    $httpBackend.flush();
    expect(promise.then).toBeDefined();
  });

});
