(function() {

    'use strict';

    angular
        .module('Apps.data')
        .controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
            // var phones = this;

            var domain = 'https://raw.githubusercontent.com';
            var url = '/angular/angular-phonecat/master/app/phones/phones.json';
            $http.get(domain + url).success(function(data) {
                $scope.phones = data;
            });

            $scope.orderProp = 'age';
            $scope.name = 'World, Martin is the BEST!!';

            console.log('"PhoneListCtrl" controller called');
            // return phones;
        }]);

})();

