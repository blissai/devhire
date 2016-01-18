'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('SignupCtrl', function ($scope, $rootScope, $location, $http, ngToast) {
    $scope.user = {}
    $scope.upload = function () {
      var postData = angular.toJson($scope.user);
      $http.post('https://app.blissai.com/api/user/register', postData,
      {'Content-Type': 'application/json'}).then(
        function(data) {
          $rootScope.currentUser = data.data;
          $location.path('/upload');
        },
        function(data) {
          ngToast.warning(data.data.error_msg);
        });

    }
  });
