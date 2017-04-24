'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:ColorCtrl
 * @description
 * # ColorCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('ColorCtrl', function () {
        var self = this;
        self.actual = 0;

        function randomElement(array) {
            var random = Math.floor(Math.random() * array.length);
            while (random === self.actual) {
                random = Math.floor(Math.random() * array.length);
            }

            self.actual = random;
            return array[random];
        }

        self.shuffleArray = function (array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        };

        self.selectColor = function () {
            self.colorSelected = randomElement(self.colors);
            if (self.hardMode) {
                self.colors = self.shuffleArray(self.colors);
            }
            if (self.colorSelected.audio) {
                self.colorSelected.audio.play();
            }
            else {
                console.log(self.colorSelected);
            }
        };

        self.select = function (color) {

            if (color === self.colorSelected) {
                self.selectColor();
            }
            else {
                self.audio.bad.audio.play();
                console.log('Raté');
            }
        };

        self.init = function () {
            self.hardMode = true;
            self.audioFile = "/audio/";
            self.audio = {
                good: {fileName: 'good.mp3'},
                bad: {fileName: 'bad.mp3'}
            };

            for (var file in self.audio) {
                self.audio[file].audio = new Audio(self.audioFile + self.audio[file].fileName);
            }

            self.random = function () {
                return 0.5 - Math.random();
            };

            self.colors = [
                {name: 'rouge', colorName: 'red', filename: 'rouge.mp3'},
                {name: 'bleu', colorName: 'blue', filename: 'bleu.mp3'},
                {name: 'jaune', colorName: 'yellow', filename: 'jaune.mp3'},
                {name: 'vert', colorName: 'green', filename: 'vert.mp3'},
                {name: 'gris', colorName: 'grey', filename: 'grisFr.mp3'},
                {name: 'noir', colorName: 'black', filename: 'noir.mp3'},
                {name: 'violet', colorName: 'purple', filename: 'violet.mp3'},
                {name: 'orange', colorName: 'orange', filename: 'orangeFr.mp3'},
                {name: 'marron', colorName: 'maroon'}
            ];

            for (file in self.colors) {
                if (self.colors[file].filename) {
                    self.colors[file].audio = new Audio(self.audioFile + self.colors[file].filename);
                }
            }

            self.selectColor();
        };

        self.init();
    });
