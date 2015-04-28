define(['./main'], function(main) {
    'use strict';
    return main.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

        function($stateProvider, $urlRouterProvider, $locationProvider) {
            //
            $locationProvider.html5Mode(false).hashPrefix('!');
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.when('', '/');
            $urlRouterProvider.otherwise('/');

            // Now set up the states
            $stateProvider
                .state('index', {
                    url: "/",
                    templateUrl: "views/main.html",
                     controller: 'MainCtrl'
                })
                 .state('404', {
                    url: "/404",
                    templateUrl: "views/404.html"
                });
        }
    ]);
});