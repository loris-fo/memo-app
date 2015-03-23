'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('memoAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no memos to start', function () {
    expect(scope.memos.length).toBe(0);
  });

  it('should add memos to the list', function () {
    scope.memo = 'Test 1';
    scope.addMemo();
    expect(scope.memos.length).toBe(1);
  });

  it('should add then remove a memo from the list', function () {
    scope.memo = 'Test 1';
    scope.addMemo();
    scope.removeMemo(0);
    expect(scope.memos.length).toBe(0);
  });
});
