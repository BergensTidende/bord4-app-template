define(['./module', 'postscribe', 'mobiledetect'], function(directives, postscribe, MobileDetect) {
	'use strict';

	/*
	This directive inserts bt ads in the page and sets up listeners for
	events
	*/
	directives.directive('btads', ['Analytics','$timeout',
		function(Analytics, $timeout) {
			return {
				restrict: 'E',
				scope: {
                    adid: '@',
                    mobileurl: '@',
                    desktopurl: '@',
                    tableturl: '@'
				},
				templateUrl: 'views/directives/ads.html',
			   	link: function(scope, element, attrs) {
			   		var md = new MobileDetect(window.navigator.userAgent);
			   		var adurl = '<script src="'+attrs.desktopurl+new Date().getTime()+'"></script>';
			   		if (md.phone()) {
			   			adurl = '<script src="'+attrs.mobileurl+new Date().getTime()+'"></script>';
			   		} else if (md.tablet()) {
			   			adurl = '<script src="'+attrs.tableturl+new Date().getTime()+'"></script>';
			   		}
			   		console.log('Annonse', adurl);
			   		$timeout(function () {
    					postscribe("#ad_1", adurl);
					});
				}
			};
		}
	]);
});