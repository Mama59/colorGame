'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:MemoryCtrl
 * @description
 * # MemoryCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('MemoryCtrl', function (colorService) {
        function init() {
            self.colors = colorService.getColors({filter: self.charactersType});
        }

        init();
    });
