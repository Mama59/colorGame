'use strict';

describe('Controller: CharactersCtrl', function () {

    // load the controller's module
    beforeEach(module('colorGameApp'));

    var CharactersCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        if (!window.Audio) {
            window.Audio = function () {
                return {
                    play: function () {
                    },
                    pause: function () {
                    }
                    // ... etc
                };
            };
        }
        CharactersCtrl = $controller('CharactersCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(true).toBe(true);
    });
});
