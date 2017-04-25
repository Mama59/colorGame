'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:ColorCtrl
 * @description
 * # ColorCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('ColorCtrl', function (colorService) {
        var self = this;
        self.actual = 0;

        self.select = function (color) {

            if (color === self.selectedColor) {
                self.selectColor();
            }
            else {
                self.audio.bad.audio.play();
                console.log('Raté');
            }
        };

        self.playSound = function () {
            colorService.playSound(self.selectedColor);
        };

        self.selectColor = function(){
            self.selectedColor = colorService.randomElement({array : self.colors, actual : self.selectedColor});
            self.colors =  colorService.shuffle(self.colors);
            self.playSound();
        };

        self.init = function () {
            self.hardMode = true;
            self.audio = colorService.getAudio();

            self.colors = colorService.getColors();

            self.selectColor();
        };

        self.init();
    });
