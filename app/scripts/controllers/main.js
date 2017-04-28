'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('MainCtrl', function (gameService) {
        var self = this;

        function init() {
            self.categories = gameService.getCategories();
            console.log(self.categories);
        }
        init();
    });
