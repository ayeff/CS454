angular.module('myApp', [])
 .directive('myDirective', function() {
 	return {
		restrict: 'A',
		replace: true,
		scope: {
			myUrl: '@',     // binding strategy
			myLinkText: '@' // binding strategy
		},
		template: '<a href="{{myUrl}}">' +
				  '{{myLinkText}}</a>'
    }
 });

