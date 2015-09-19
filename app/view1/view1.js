'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }
])

.controller('View1Ctrl', ['$scope',
  function($scope) {
    $scope.px0 = "";
    $scope.px1 = "";
    $scope.px2 = "";
    $scope.px3 = "";

    $scope.make_png = function() {
      var px0 = tinycolor($scope.px0);
      var px1 = tinycolor($scope.px1);
      var px2 = tinycolor($scope.px2);
      var px3 = tinycolor($scope.px3);

      var p = new PNGlib(2, 2, 256); // construcor takes height, weight and color-depth
      p.color(0, 0, 0, 0); // set the background transparent
      p.buffer[p.index(0, 0)] = p.color(px0.toRgb().r, px0.toRgb().g, px0.toRgb().b);
      p.buffer[p.index(0, 1)] = p.color(px1.toRgb().r, px1.toRgb().g, px1.toRgb().b);
      p.buffer[p.index(1, 0)] = p.color(px2.toRgb().r, px2.toRgb().g, px2.toRgb().b);
      p.buffer[p.index(1, 1)] = p.color(px3.toRgb().r, px3.toRgb().g, px3.toRgb().b);

      $scope.background = {
        'background-image': 'url(data:image/png;base64,' + p.getBase64() + ')'
      };
      $scope.bgpx0 = {
        'background-color': $scope.px0
      };
      $scope.bgpx1 = {
        'background-color': $scope.px1
      };
      $scope.bgpx2 = {
        'background-color': $scope.px2
      };
      $scope.bgpx3 = {
        'background-color': $scope.px3
      };

    }

  }
]);