(function() {

    'use strict';

    angular
        .module('Apps.data')
        .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
                     function($scope, $routeParams, $http) {

                         // console.log('"$routeParams:"' + $routeParams);
                         var domain = 'https://raw.githubusercontent.com';
                         var url = '/angular/angular-phonecat/master/app/phones/';
                         $http.get(domain + url + $routeParams.phoneId + '.json')
                             .success(function(data) {
                                 $scope.phone = data;
                             });
                         console.log('"PhoneDetailCtrl" controller called');
                     }]);
})();

