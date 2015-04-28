define([ './module'], function (filters) {
	'use strict';

	filters.filter('numberastext', function () {
		return function (num, upper) {
			if(num) {
				var value;
				if (+num < 12) {
					var txt = ['en', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti']
					value = txt[num-1];

					if (upper) {
						return value.charAt(0).toUpperCase() + value.substring(1);
					} else {
						return value;
					}
				} else {
					return num;
				}
			}
		};
	});
});