'use strict';

/**
 * @ngdoc function
 * @name memoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoAppApp
 */
angular.module('memoAppApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('memos');

    $scope.memos = todosInStore || [];

    $scope.$watch('memos', function () {
      localStorageService.set('memos', $scope.memos);
    }, true);

    $scope.addMemo = function () {
      $scope.memos.push($scope.memo);
      $scope.memo = '';
    };

    $scope.removeMemo = function (index) {
      $scope.memos.splice(index, 1);
    };

  });
