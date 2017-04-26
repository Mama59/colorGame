'use strict';

/**
 * @ngdoc service
 * @name colorGameApp.colorService
 * @description
 * # colorService
 * Service in the colorGameApp.
 */
angular.module('colorGameApp')
    .service('colorService', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var self = this;
        self.audioFile = "/audio/";

        self.getAudio = function () {
            var audio = {
                good: {fileName: 'good.mp3'},
                bad: {fileName: 'bad.mp3'}
            };

            for (var file in audio) {
                if (audio[file].fileName) {
                    audio[file].audio = new Audio(self.audioFile + audio[file].fileName);
                }
            }
            return audio;
        };

        self.getColors = function (params) {
            var colorsSelected = [];
            for (var file in self.colors) {
                if (!params || (params && params.filter && self.colors[file][params.filter])) {
                    if (self.colors[file].fileName) {
                        self.colors[file].audio = new Audio(self.audioFile + self.colors[file].fileName);
                    }

                    if (self.colors[file].fileNameEn) {
                        self.colors[file].audioEn = new Audio(self.audioFile + self.colors[file].fileNameEn);
                    }
                    if (params && params.filter) {
                        self.colors[file].character = self.colors[file][params.filter];
                    }
                    colorsSelected.push(self.colors[file]);
                }
            }
            return colorsSelected;
        };

        self.shuffle = function (array) {
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

        self.playSound = function (object) {
            if (object && object.audio) {
                object.audio.play();
            }
        };

        function randomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        self.randomElement = function (opts) {
            var array = opts.array;
            var random;
            do {
                random = randomElement(array);
            } while (random === opts.actual);

            return random;
        };

        function init() {
            self.colors = [
                {
                    name: 'rouge',
                    nameEn: 'red',
                    colorName: 'red',
                    fileName: 'rouge.mp3',
                    fileNameEn: 'red.mp3',
                    pawPatrol: 'marcus.jpeg',
                    robocarpoli: 'roy.jpg',
                    viceVersa: 'colere.jpeg'
                },
                {
                    name: 'bleu',
                    nameEn: 'blue',
                    colorName: 'blue',
                    fileName: 'bleu.mp3',
                    fileNameEn: 'blue.mp3',
                    pawPatrol: 'chase.jpeg',
                    robocarpoli: 'poli.jpg',
                    viceVersa: 'tristess.jpeg'
                },
                {
                    name: 'jaune',
                    nameEn: 'yellow',
                    colorName: 'yellow',
                    fileName: 'jaune.mp3',
                    fileNameEn: 'yellow.mp3',
                    pawPatrol: 'ruben.jpeg',
                    viceVersa: 'joie.jpeg'
                },
                {
                    name: 'vert',
                    nameEn: 'green',
                    colorName: 'green',
                    fileName: 'vert.mp3',
                    fileNameEn: 'green.mp3',
                    pawPatrol: 'rocky.jpeg',
                    robocarpoli: 'heli.jpg',
                    viceVersa: 'degout.jpeg'
                },
                {
                    name: 'gris',
                    nameEn: 'grey',
                    colorName: 'grey',
                    fileName: 'grisFr.mp3',
                    fileNameEn: 'grey.mp3',
                    pawPatrol: 'everest.jpg'
                },
                {
                    name: 'noir',
                    nameEn: 'black',
                    colorName: 'black',
                    fileName: 'noir.mp3',
                    fileNameEn: 'black.mp3'
                },
                {
                    name: 'violet',
                    nameEn: 'purple',
                    colorName: 'purple',
                    fileName: 'violet.mp3',
                    fileNameEn: 'violetEn.mp3',
                    viceVersa: 'peur.jpeg'
                },
                {
                    name: 'orange',
                    nameEn: 'orange',
                    colorName: 'orange',
                    fileName: 'orangeFr.mp3',
                    fileNameEn: 'orangeEn.mp3',
                    pawPatrol: 'zuma.jpeg'
                },
                {
                    name: 'rose',
                    nameEn: 'pink',
                    colorName: 'pink',
                    fileName: 'roseFr.mp3',
                    fileNameEn: 'pink.mp3',
                    pawPatrol: 'stella.jpeg',
                    robocarpoli: 'ambre.jpg'
                },
                {
                    name: 'marron',
                    nameEn: 'brown',
                    colorName: 'maroon'
                }
            ];
        }

        init();
    });
