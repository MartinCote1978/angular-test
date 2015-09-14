(function() {

    'use strict';

    angular
        .module('Apps.data')
        .controller('PhoneDetailCtrl', ['$scope', '$http', '$stateParams',
                     function($scope, $http, $stateParams) {

                         var domain = 'https://raw.githubusercontent.com';
                         var url = '/angular/angular-phonecat/master/app/phones/';
                         $http.get(domain + url + $stateParams.phoneId + '.json')
                             .success(function(data) {
                                 $scope.phone = data;
                             });
                         console.log('"PhoneDetailCtrl" controller called');
                     }]);
})();

