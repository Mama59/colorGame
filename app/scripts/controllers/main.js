'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('MainCtrl', function () {
        var self = this;

        function init() {
            self.game = {
                'Retrouve les couleurs': {
                    description: 'Cliques sur la couleur que tu entends',
                    link: 'image'
                },
                'Nomme les couleurs': {
                    description: 'Dit le nom de la couleur que tu vois',
                    link: 'color'
                }
            };
        }

        init();
    });
