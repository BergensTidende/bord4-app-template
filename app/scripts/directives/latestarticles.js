define(['./module', 'angularGoogleAnalytics'], function(directives, $) {
    'use strict';

    /*
	This directive inserts bt ads in the page and sets up listeners for
	events
	*/
    directives.directive('latestarticles', ['Analytics', 'configuration',
        function(Analytics, configuration) {
            return {
                restrict: 'E',
                scope: {
                    articles: '=',
                    showlead: '=',
                    offset: '=',
                    limit: '='
                },
                templateUrl: 'views/directives/latestarticles.html',
               compile: function (tElement, tAttr) {
                    return function (scope, iElement, iAttr) {
                         scope.trackAdClick = function (target) {
                            Analytics.trackEvent(configuration.trackingprefix, 'latest_article_click', target);
                        };
                    };
                }
            };
        }
    ]);
});