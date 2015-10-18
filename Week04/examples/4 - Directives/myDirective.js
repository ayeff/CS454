angular.module('myApp', [])
 .directive('myDirective', function() {
   return {
     //restrict: 'E',
     restrict: 'EACM',
     //replace: true,
     template: '<a href="https://github.com/cydneymikel/CS454">Click me to go to the CS 454 Homepage</a>'
   };
 });

