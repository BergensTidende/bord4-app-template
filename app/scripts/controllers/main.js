define( [ './module', 'jquery', 'lodash', 'twitterbootstrap', 'angularbootstrap' ], function ( controllers,  $, _, bootstrap, angularbootstrap) {
	'use strict';
        controllers.controller( 'MainCtrl', ['$scope', 'configuration', function ( $scope, configuration) {
            $scope.config = configuration;
            $scope.anumber = 3;

            //SHARING
            $('.share-twitter').click(function() {
                window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('Deles jeg ikke, virker jeg ikke') + '&via=btno', 'twitsharer', 'toolbar=0,status=0,width=626,height=436');
            });
            $('.share-facebook').click(function() {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 'facebook', 'toolbar=0,status=0,width=626,height=436');
            });
            // END SHARING

	}]);
});