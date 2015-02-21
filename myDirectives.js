var app = angular.module('directiveWorkshop');

app.directive('pending', function () {
  return {
    restrict: 'A',
    scope: {
      running: '='
    },
    link: function ($scope, $element, $attributes) {

      $scope.$watch('running', function (newVal, oldVal) {
        if (newVal === true) {
          $element.text('Working...');
          $element.append('<img src="ajax-loader.gif" />');
        } else {
          $element.html('Submit');
        }
      });
    }
  }
});