angular.module('cacLibrary', [])

  .constant('CAC_API_PREFIX','http://api.geonames.org')
  .constant('CAC_API_SUFFIX', 'username=garrywest')
  .constant('CAC_COUNTRY_INFO_PATH', '/countryInfo?')

  .constant('CAC_NEIGHBORS', '/neighboursJSON?country={{ countryCode }}')
  .constant('CAC_SEARCH', '/searchJSON?country={{ countryCode }}&featureCode=PPLC')

  .factory('cacCountries', ['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 'CAC_COUNTRY_INFO_PATH',
                   function($http,   $q,   CAC_API_PREFIX, CAC_API_SUFFIX, CAC_COUNTRY_INFO_PATH) {
    return function() {
      var defer = $q.defer();
      $http.get(CAC_API_PREFIX+CAC_COUNTRY_INFO_PATH+CAC_API_SUFFIX, {cache: true})
        .success(function(countries) {
          var x2js = new X2JS();
          var json = x2js.xml_str2json( countries );
          defer.resolve(json.geonames.country);
        });
      return defer.promise;
    }
  }])

  .factory('cacRequest', ['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 
                  function($http,   $q,   CAC_API_PREFIX, CAC_API_SUFFIX) {
    return function(path) {
      var defer = $q.defer();
      $http.get(CAC_API_PREFIX + path + '&' + CAC_API_SUFFIX)
        .success(function(data) {
          defer.resolve(data.geonames);
        })
      return defer.promise;
    }
  }])

  .factory('cacFindCountry',    ['cacRequest', '$interpolate', 'CAC_SEARCH',
                      function(cacRequest,   $interpolate,   CAC_SEARCH ) {
    return function(q) {
      var path;
      path = $interpolate(CAC_SEARCH)({
        countryCode : q
      });

      return cacRequest(path);
    }
  }])

 .factory('cacFindNeighbors',    ['cacRequest', '$interpolate', 'CAC_NEIGHBORS',
                      function(cacRequest,   $interpolate,   CAC_NEIGHBORS ) {
    return function(q) {
      var path;
      path = $interpolate(CAC_NEIGHBORS)({
        countryCode : q
      });

      return cacRequest(path);
    }
  }])

