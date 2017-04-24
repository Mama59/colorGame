'use strict';

describe('Controller: ColorCtrl', function () {

    // load the controller's module
    beforeEach(module('colorGameApp'));

    var ColorCtrl,
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
        ColorCtrl = $controller('ColorCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    describe('My test', function () {
        it('should attach a list of colors to the scope', function () {
            ColorCtrl.init();
            expect(ColorCtrl.colors.length).toBe(9);
        });
    });
});
