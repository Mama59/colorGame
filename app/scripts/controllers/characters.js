'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:CharactersCtrl
 * @description
 * # CharactersCtrl
 * Controller of the colorGameApp
 */
angular.module('colorGameApp')
    .controller('CharactersCtrl', function (gameService, $routeParams) {
        var self = this;
        self.actual = 0;

        self.select = function (color) {

            if (color === self.selectedGame) {
                self.selectColor();
            }
            else {
                self.audio.bad.audio.play();
                console.log('Raté');
            }
        };

        self.playSound = function () {
            gameService.playSound(self.selectedGame);
        };

        self.selectColor = function () {
            self.selectedGame = gameService.randomElement({array: self.games, actual: self.selectedGame});
            self.games = gameService.shuffle(self.games);

            if (self.gameFilter === 'color') {
                self.selectedGame.class = "circle";
            }
            else {
                self.selectedGame.class = "";
            }
            self.playSound();
        };

        self.isImg = function () {
            return !(self.gameFilter === 'color' || self.gameFilter === 'sound' || self.gameType !== 'colors');
        };

        self.init = function () {
            self.hardMode = true;
            self.audio = gameService.getAudio();
            self.list = ['viceVersa', 'pawPatrol', 'robocarpoli'];
            self.gameType = $routeParams.gameType || 'colors';
            self.gameFilter = $routeParams.gameFilter || 'pawPatrol';
            self.folder = 'images/' + self.gameFilter;
            self.games = gameService.getGames({filter: self.gameFilter, type: self.gameType});
            self.selectColor();
            self.isImage = self.isImg();
        };
        self.init();
    });
