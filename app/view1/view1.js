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
      var sz = 5;
      var mypixels = Array(sz * sz);
      var k, l, j;
      var ly;
      for (k = 0; k < sz; k++) {
        var x = k * 2 * Math.PI / sz;
        var y = Math.round((Math.sin(x) + 1) * (sz - 3) / 2);
        if (k == 0) ly = y;
        if (ly > y) {
          for (j = ly - 1; j > y; j--) {
            mypixels[k + sz * j] = 1;
          }
        } else {
          for (j = ly + 1; j < y; j++) {
            mypixels[k + sz * j] = 1;
          }
        }
        mypixels[k + sz * y] = 1;
        ly = y;
      }
      return make_glif(sz, sz, mypixels, 255);
    }
  }
]);