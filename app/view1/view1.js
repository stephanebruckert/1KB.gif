'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }
])

.controller('View1Ctrl', ['$scope',
  function($scope) {
    var my_gif = make_my_gif();
    $scope.background = {
      'background-image': 'url(' + my_gif + ')',
      'background-repeat': 'repeat'
    };

    function make_my_gif() {
      var width = 2;
      var height = 2;
      var mypixels = Array(height * width);

      mypixels[0] = 1;
      mypixels[1] = 0;
      mypixels[2] = 0;
      mypixels[3] = 0;

      return make_glif(width, height, mypixels, 128, 128, 128);
    }
  }
]);