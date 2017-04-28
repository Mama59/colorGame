'use strict';

/**
 * @ngdoc service
 * @name colorGameApp.gameService
 * @description
 * # gameService
 * Service in the colorGameApp.
 */
angular.module('colorGameApp')
    .service('gameService', function () {
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

        self.getNumbers = function () {

        };

        self.getGames = function (params) {
            var colorsSelected = [];
            var type = params.type || 'colors';
            for (var file in self.games[type]) {
                var filter;
                if (params && params.type && params.filter && self.categories[type][params.filter]) {
                    filter = self.categories[type][params.filter].key;
                }
                else {
                    filter = self.categories.colors.sound.key;
                }

                if (self.games[type][file].fileName) {
                    self.games[type][file].audio = new Audio(self.audioFile + self.gamesFile + self.games[type][file].fileName);
                }

                if (self.games[type][file].fileNameEn) {
                    self.games[type][file].audioEn = new Audio(self.audioFile + self.gamesFile + self.games[type][file].fileNameEn);
                }
                if (self.games[type][file][filter]) {
                    self.games[type][file].character = self.games[type][file][params.filter];
                    colorsSelected.push(self.games[type][file]);
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

        self.getCategories = function () {
            return self.categories;
        };

        self.randomElement = function (opts) {
            var array = opts.array;
            var random;
            do {
                random = randomElement(array);
            } while (random === opts.actual);

            return random;
        };

        function init() {
            self.imageFolder = 'images/';
            self.gamesFile = 'colors/';

            self.games = {
                colors: [
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
                ],
                letters: [
                    {
                        lettre: 'A',
                        fileName: ''
                    },
                    {
                        lettre: 'B',
                        fileName: ''
                    },
                    {
                        lettre: 'C',
                        fileName: ''
                    },
                    {
                        lettre: 'D',
                        fileName: ''
                    },
                    {
                        lettre: 'E',
                        fileName: ''
                    },
                    {
                        lettre: 'F',
                        fileName: ''
                    },
                    {
                        lettre: 'G',
                        fileName: ''
                    },
                    {
                        lettre: 'H',
                        fileName: ''
                    },
                    {
                        lettre: 'I',
                        fileName: ''
                    },
                    {
                        lettre: 'J',
                        fileName: ''
                    },
                    {
                        lettre: 'K',
                        fileName: ''
                    },
                    {
                        lettre: 'L',
                        fileName: ''
                    },
                    {
                        lettre: 'M',
                        fileName: ''
                    },
                    {
                        lettre: 'N',
                        fileName: ''
                    },
                    {
                        lettre: 'O',
                        fileName: ''
                    },
                    {
                        lettre: 'P',
                        fileName: ''
                    },
                    {
                        lettre: 'Q',
                        fileName: ''
                    },
                    {
                        lettre: 'R',
                        fileName: ''
                    },
                    {
                        lettre: 'S',
                        fileName: ''
                    },
                    {
                        lettre: 'T',
                        fileName: ''
                    },
                    {
                        lettre: 'U',
                        fileName: ''
                    },
                    {
                        lettre: 'V',
                        fileName: ''
                    },
                    {
                        lettre: 'W',
                        fileName: ''
                    },
                    {
                        lettre: 'X',
                        fileName: ''
                    },
                    {
                        lettre: 'Y',
                        fileName: ''
                    },
                    {
                        lettre: 'Z',
                        fileName: ''
                    }
                ],
                numbers: [
                    {
                        number: 0,
                        fileName: 'zeroFr.mp3'
                    },
                    {
                        number: 1,
                        fileName: 'unFr.mp3'
                    },
                    {
                        number: 2,
                        fileName: 'deux.mp3'
                    },
                    {
                        number: 3,
                        fileName: 'trois.mp3'
                    },
                    {
                        number: 4,
                        fileName: 'quatre.mp3'
                    },
                    {
                        number: 5,
                        fileName: 'cinq.mp3'
                    },
                    {
                        number: 6,
                        fileName: 'sixFr.mp3'
                    },
                    {
                        number: 7,
                        fileName: 'sept.mp3'
                    },
                    {
                        number: 8,
                        fileName: 'huit.mp3'
                    },
                    {
                        number: 9,
                        fileName: 'neuf.mp3'
                    },
                    {
                        number: 10,
                        fileName: 'dix.mp3'
                    }
                ]

            };

            self.categories = {
                colors: {
                    sound: {key: "fileName"},
                    soundEn: {key: "fileNameEn"},
                    pawPatrol: {key: "pawPatrol", gameImg: self.imageFolder + 'pawPatrol/game.png'},
                    robocarpoli: {
                        key: "robocarpoli",
                        gameImg: self.imageFolder + 'robocarpoli/game.jpg',
                        type: 'colors'
                    },
                    viceVersa: {key: "viceVersa", gameImg: self.imageFolder + 'viceVersa/game.jpg'},
                    color: {key: 'name', gameImg: self.imageFolder + 'question.jpg'},
                    colorEn: {key: 'nameEn'}
                },
                alphanum : {
                    numbers : {key : 'fileName'}
                }
            };
        }

        init();
    });
