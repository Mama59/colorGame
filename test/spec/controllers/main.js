'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('colorGameApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    afterAll(function () {
            setTimeout(process.exit(), 1000);
        }
    );


    describe('My Main test', function () {
        it('Expect true', function () {
            expect(true).toBe(true);
        });
    });
});
