define([ './module'], function (services) {
  'use strict';
  services.service('config', [

    function() {}

  ]).constant('configuration', {
    //legg inn config parametre her eller henvis til json-filene i /config ved @@parameternavn
      projectname: 'prosjektnavn',
      trackingprefix: 'spesial/prosjektnavn',
      apiserver: '@@apiserver',
      env: '@@env'
    });;
});
