define([
    'angular',
    'lodash',
    'angularUIRouter',
    'angularLocale',
    'angularbootstrap',
    'angularResource',
    'moment',
    'momentno',
    'angularGoogleAnalytics',
    './services/index',
    './controllers/index',
    //'./modules/index',
    './directives/index',
    './filters/index'
], function(angular) {
    'use strict';

    return angular.module('prosjektnavnApp', [
        'ui.router',
        'ngResource',
        'ui.bootstrap',
        'prosjektnavnApp.controllers',
        'prosjektnavnApp.services',
        //'prosjektnavnApp.modules',
        'prosjektnavnApp.directives',
        'prosjektnavnApp.filters',
        'angular-google-analytics'
    ]).config(['AnalyticsProvider', 'configuration', function(AnalyticsProvider, configuration) {
        AnalyticsProvider.setAccount('UA-26877368-1');
        AnalyticsProvider.ignoreFirstPageLoad(true);
        AnalyticsProvider.trackPages(true);
        //uses configuration from /config/config.js to get trackingprefix
        AnalyticsProvider.trackPrefix(configuration.trackingprefix);
        AnalyticsProvider.useAnalytics(true);
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');

    }]).run(function(Analytics) {

    });
});