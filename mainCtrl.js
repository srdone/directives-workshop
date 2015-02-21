var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function($scope, mainService){

  $scope.gettingData = false;

$scope.getData = function () {
  $scope.gettingData = true;
        return mainService.getData($scope.query).then(function (data) {

           console.log(data);
          $scope.gettingData = false;
           return $scope.data = data;
        });
    };

});