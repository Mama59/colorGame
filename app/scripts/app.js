'use strict';

/**
 * @ngdoc overview
 * @name colorGameApp
 * @description
 * # colorGameApp
 *
 * Main module of the application.
 */
angular
    .module('colorGameApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ngAnimate',
        'ngAria'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'AboutCtrl'
            })
            .when('/color', {
                templateUrl: 'views/color.html',
                controller: 'ColorCtrl',
                controllerAs: 'ColorCtrl'
            })
            .when('/characters', {
              templateUrl: 'views/characters.html',
              controller: 'CharactersCtrl',
              controllerAs: 'CharactersCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
