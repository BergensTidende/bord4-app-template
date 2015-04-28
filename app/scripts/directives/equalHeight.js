define(['./module', 'jquery', 'lodash'], function(directives, $, _) {
	'use strict';
	directives.directive('cssEqualHeight', ['$rootScope',
		function($rootScope) {
		        return {
			        restrict: 'A',
			        link: function(scope, element, attrs) {
			        	scope.elementselector = attrs.cssEqualHeight;

			            if (typeof $rootScope.loadCounter === 'undefined') {
			                $rootScope.loadCounter = 0;
			            }

			            element.find('img').bind('load', function() {
			                scope.$emit('$imageLoaded', $rootScope.loadCounter++);
			            });

			        },
			        controller: function($scope) {
			            $scope.$parent.$on('$imageLoaded', function(event, data) {

			                if ($scope.$last && $scope.$index === $rootScope.loadCounter - 1) {
			                    var divs = $("." + $scope.elementselector);

			                    var maxheight_element = _.max(divs, function(div) {
			                    	return  $(div).height();
			                    });

			                    var max_height= $(maxheight_element).height();
			                    console.log($scope.elementselector, max_height);

			                    //set the max as height of all elements
			                    $("." + $scope.elementselector).height(max_height+5);

			                    delete $rootScope.loadCounter;
			                }
			            });


			        }
			    };
		}
	]);
});