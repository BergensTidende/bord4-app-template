define([ './module'], function (filters) {
	'use strict';

	filters.filter('offset', function () {
		return function (input, start) {
			if (input !== undefined) {
				start = parseInt(start, 10);
				return input.slice(start);
			}
		};
	});
});