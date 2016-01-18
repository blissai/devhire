'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.signUp = function () {
      $location.path('/signup');
    }
  });
