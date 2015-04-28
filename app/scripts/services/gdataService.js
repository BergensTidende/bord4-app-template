define(['./module', 'lodash'], function(services, _, SNDAPI) {
'use strict';
	services.factory('gdataService', function($q, $http) {
		var config = {headers: {
            'Access-Control-Allow-Origin': '*'
            }
    	};
		var Gdata = {
			fetch: function(callback) {

				var deferred = $q.defer();
				$http({
					method: 'GET',
					url: 'url_for_json_data_file_on_server'
				})
				.success(function(data) {
					deferred.resolve(data);
				});

				return deferred.promise;
			}
		};

		return Gdata;
	});
});