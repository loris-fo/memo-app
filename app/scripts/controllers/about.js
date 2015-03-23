'use strict';

/**
 * @ngdoc function
 * @name memoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoAppApp
 */
angular.module('memoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
