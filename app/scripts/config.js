require.config({

paths: {
        angular: '../bower_components/angular/angular',
        angularGoogleAnalytics: '../bower_components/angular-google-analytics/dist/angular-google-analytics',
        angularbootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        angularUIRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
        angularLocale: '../bower_components/angular-i18n/angular-locale_no',
        angularResource: '../bower_components/angular-resource/angular-resource',
        moment: '../bower_components/moment/min/moment.min',
        momentno: '../bower_components/moment/locale/nb',
        fastclick: '../bower_components/fastclick/lib/fastclick',
        jquery: '../bower_components/jquery/dist/jquery',
        twitterbootstrap: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap',
        lodash: '../bower_components/lodash/lodash',

        //ads
        htmlparser: '../bower_components/htmlparser/lib/htmlparser',
        postscribe: '../bower_components/postscribe/dist/postscribe',
        mobiledetect: '../bower_components/mobile-detect/mobile-detect',
        //endands

        webhit: 'http://webhit.snd.no/webhit/js/v4',
    },
    shim: {
        angular: {
            'exports': 'angular'
        },
        angularbootstrap: ['angular'],
        angularGoogleAnalytics: ['angular'],
        angulargeolocation: ['angular'],
        angularLocale: ['angular'],
        angularResource: ['angular'],
        angularUIRouter: ['angular'],

        twitterbootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        fastclick: {
            exports: 'fastclick'
        },
        htmlparser: {
            exports: 'htmlparser'
        },
        postscribe: {
            deps: ['htmlparser'],
            exports: 'postscribe'
        },
        mobiledetect: {
            exports: 'MobileDetect'
        },
         webhit: {
            deps: ['jquery'],
            exports: 'webhit'
        },

    },
priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";
require( [
    'angular',
    './main',
    './routes',
    'fastclick',
    'webhit'
], function(angular, main, routes, FastClick) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.resumeBootstrap([main['name']]);
    });
    FastClick.attach(document.body);
});