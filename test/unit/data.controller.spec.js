describe('PhoneListCtrl', function(){

  beforeEach(module('Apps'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
  }));
  
  expect(scope.name).toBe('World');

  it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
  });
});