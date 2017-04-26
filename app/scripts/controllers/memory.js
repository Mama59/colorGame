'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:MemoryCtrl
 * @description
 * # MemoryCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('MemoryCtrl', function (colorService, $routeParams) {
        var self = this;
        self.initMemory = function () {
            self.memory = [];
            for (var index in self.colors) {
                var color = angular.copy(self.colors[index]);
                var color2 = angular.copy(self.colors[index]);
                color.id = index;
                color.showed = false;
                color2.id = index + self.colors.length;
                color2.showed = false;

                self.memory.push(color, color2);
                self.memory = colorService.shuffle(self.memory);
            }
        };

        self.selectMemory = function (index) {
            if (self.memory[index].showed) {
                console.log('already choose');
            }
            else {
                self.memory[index].showed = true;

                if (self.memorySelected && self.memoryTest) {
                    self.memoryTest.showed = false;
                    self.memorySelected.showed = false;
                    self.memoryTest = null;
                    self.memorySelected = null;
                }

                if (self.memorySelected) {
                    self.memoryTest = self.memory[index];
                    self.memoryTest.showed = true;
                    if (self.memorySelected.colorName === self.memoryTest.colorName) {
                        console.log('ok');
                        self.memoryTest = null;
                        self.memorySelected = null;
                    }
                }
                else {
                    self.memorySelected = self.memory[index];
                    self.memorySelected.showed = true;
                }
            }
        };

        function init() {
            self.memorySelected;
            self.colors = colorService.getColors({filter: self.charactersType});
            self.charactersType = $routeParams.charactersType || 'pawPatrol';
            self.folder = 'images/' + self.charactersType + '/';
            self.colors = colorService.getColors({filter: self.charactersType});
            self.categories = colorService.getCategories();
            self.initMemory();
        }

        init();
    });
