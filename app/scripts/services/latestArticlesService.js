define(['./module', 'lodash'], function(services, _, SNDAPI) {
    'use strict';
    services.factory('latestArticleService', ['$http', '$q', 'configuration',
        function($http, $q, configuration) {

            function getLatest (sectionNumber, limit) {
                var deferred = $q.defer();
                $http({method: 'GET', url: configuration.apiserver + '/maktibergen/api/latest/' + +sectionNumber + '/' + limit})
                     .success(function(data, status, headers, config) {
                        var articles = data;
                        deferred.resolve(articles);
                      })
                      .error(function(data, status, headers, config) {
                       deferred.reject({ status: status });
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                      });
                return deferred.promise;
            }
            return {
                getLatest: getLatest
            }
        }
    ]);
});