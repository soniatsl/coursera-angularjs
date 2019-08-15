(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.lunchInput = "";
  $scope.checkLunch = function(){
    if($scope.lunchInput !== ""){
      var lunchArray = $scope.lunchInput.replace(/\s/g,'').split(",");
      if(lunchArray.length > 3){
        $scope.message = "Too much!";
      }
      else{
        $scope.message = "Enjoy!"
      }

    }
    else{
      $scope.message = "Please enter data first"
    }
  };
};

})();
