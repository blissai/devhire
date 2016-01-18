'use strict';

/**
 * @ngdoc overview
 * @name talentacquisitionApp
 * @description
 * # talentacquisitionApp
 *
 * Main module of the application.
 */
angular
  .module('talentacquisitionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngToast'
  ])
  .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/upload', {

        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('MainCtrl', ["$scope", "$location", function ($scope, $location) {
    $scope.signUp = function () {
      $location.path('/signup');
    }
  }]);

'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('SignupCtrl', ["$scope", "$rootScope", "$location", "$http", "ngToast", function ($scope, $rootScope, $location, $http, ngToast) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name talentacquisitionApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the talentacquisitionApp
 */
angular.module('talentacquisitionApp')
  .controller('UploadCtrl', ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
    if (!$rootScope.currentUser) {
      $location.path('/signup');
    }
  }]);
