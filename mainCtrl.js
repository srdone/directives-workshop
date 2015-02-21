var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function($scope, mainService){

  $scope.gettingData = false;

$scope.getData = function () {
  $scope.gettingData = true;
        mainService.getData($scope.query).then(function (data) {

           console.log(data);
          $scope.gettingData = false;
           $scope.data = data;
          $scope.title = data.data.results[0].collectionName;
          $scope.body = data.data.results[0].collectionPrice;
          $scope.icon = data.data.results[0].artworkUrl100;
        });
    };

});