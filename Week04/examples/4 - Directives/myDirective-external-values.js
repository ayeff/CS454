angular.module('myApp', [])
 .directive('myDirective', function() {
 	return {
		restrict: 'A',
		replace: true,
		scope: {
			myUrl: '=someUrl',     
			myLinkText: '=someLinkText'
		},
		template: '<a href="{{myUrl}}">' +
				  '{{myLinkText}}</a>'
    }
 });

