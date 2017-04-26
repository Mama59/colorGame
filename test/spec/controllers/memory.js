'use strict';

describe('Controller: MemoryCtrl', function () {

  // load the controller's module
  beforeEach(module('colorGameApp'));

  var MemoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemoryCtrl = $controller('MemoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!MemoryCtrl).toBe(true);
  });
});
