'use strict';

/**
 * @ngdoc function
 * @name memoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoAppApp
 */
angular.module('memoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.memos = [];

    $scope.addMemo = function () {
      $scope.memos.push($scope.memo);
      $scope.memo = '';
    };

    $scope.removeMemo = function (index) {
      $scope.memos.splice(index, 1);
    };

  });
