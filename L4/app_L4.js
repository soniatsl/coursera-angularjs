(function(){
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
  $scope.name = "Sonia";
  $scope.sayHello = function(){
    return "Hello Coursera!";
  };
});

})();
