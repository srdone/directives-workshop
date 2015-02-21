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

app.directive('notify', function () {
  return {
    restrict: 'A',
    scope: {
      title: '=',
      body: '=',
      icon: '='
    },
    link: function ($scope, $element, $attributes) {

      var Notification = window.Notification || window.mozNotification || window.webkitNotification;

      var displayNotification = function (title, body, icon) {
        new Notification(title, {body: body, icon: icon});
      };

      Notification.requestPermission(function (permission) {

        if (permission === 'granted') {
          $element.click(function () {
            displayNotification($scope.title, $scope.body, $scope.icon);
          })
        }


      });
    }

  }
});