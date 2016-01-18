'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('UploadCtrl', function ($scope, $rootScope, $http, $location) {
    if (!$rootScope.currentUser) {
      $location.path('/signup');
    }
  });
