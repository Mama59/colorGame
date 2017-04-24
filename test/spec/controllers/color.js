'use strict';

describe('Controller: ColorCtrl', function () {

  // load the controller's module
  beforeEach(module('colorGameApp'));

  var ColorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorCtrl = $controller('ColorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColorCtrl.awesomeThings.length).toBe(3);
  });
});
