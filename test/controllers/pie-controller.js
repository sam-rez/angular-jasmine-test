var pie = angular.module('pie', []);

var PieController = function($scope){

  $scope.slices = 8;

  $scope.eatSlice = function(){
      if($scope.slices){
          $scope.slices--;
      }
  };

}

pie.controller("PieController", PieController);
