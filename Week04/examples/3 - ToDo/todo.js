
angular.module('todoApp', [])
  .controller('TodoCtrl', function($scope) {

    //var $scope = this;

    $scope.todos = [
      {text:'Make a todo list', done:false},
      {text:'Add an item to my list', done:false},
      {text:'Complete an item on my list', done:false}
      ];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  });