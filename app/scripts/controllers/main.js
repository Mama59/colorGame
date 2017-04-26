'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('MainCtrl', function (colorService) {
        var self = this;

        function init() {
            self.categories = colorService.getCategories();
        }
        init();
    });
