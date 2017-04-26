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
            self.games = [{
                name: 'Retrouve les couleurs',
                list: [
                    {
                        name: 'Sound',
                        description: 'Selectionne la couleur que tu entend',
                        link: 'characters?charactersType=fileName'
                    },
                    {
                        name: 'Color',
                        description: 'Selectionne la couleur que tu vois',
                        link: 'characters?charactersType=colorName'
                    },
                    {
                        name: 'PawPatrol',
                        link: 'characters?charactersType=pawPatrol'
                    },
                    {
                        name: 'Robocarpoli',
                        link: 'characters?charactersType=robocarpoli'
                    },
                    {
                        name: 'viceVersa',
                        link: 'characters?charactersType=viceVersa'
                    }],

                description: 'Retrouve les couleurs avec tes héros préférés ou simplement avec le son'
            },
                {
                    name: 'Test',
                    list: [
                        {
                            name: 'test1',
                            link: 't2'
                        }
                    ]
                }]
        }

        init();
    });
