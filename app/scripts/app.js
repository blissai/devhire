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
  .config(function ($routeProvider, $httpProvider) {
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
  });
