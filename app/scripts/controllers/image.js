'use strict';

/**
 * @ngdoc function
 * @name colorGameApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the colorGameApp
 */

angular.module('colorGameApp')
  .controller('ImageCtrl', function ($scope) {
    var self = this;
    $scope._ = _;
    self.actual = 0;

    function randomElement(array) {
      var random = Math.floor(Math.random() * array.length);
      while (random == self.actual) {
        random = Math.floor(Math.random() * array.length);
      }

      self.actual = random;
      return array[random];
    }

    self.selectColor = function () {
      self.colorSelected = randomElement(self.colors);
      if (self.hardMode) {
        self.colors = $scope._.shuffle(self.colors);
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
        {name: 'orange', colorName: 'orange', filename: 'orangeFr.mp3'}
      ];

      for (var file in self.colors) {
        if (self.colors[file].filename) {
          self.colors[file].audio = new Audio(self.audioFile + self.colors[file].filename);
        }
      }

      self.selectColor();
    };

    self.init();
  });

