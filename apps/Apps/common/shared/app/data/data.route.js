(function() {
    'use strict';

    angular
        .module('Apps.data')
        .run(appsDataRouteRun);

    ////////// Functions //////////

    /* @ngInject */
    function appsDataRouteRun(routeHelper, AppsConf, AppsDataConf) {
        // Here we call a "routeHelper" utility to add its states to the application.
        // This allows us to completely remove the entire feature and not have to
        // modify the routes elswhere

        routeHelper.configureStates(getSectionStates(AppsConf, AppsDataConf));
    }

    function getSectionStates(appConfObj, moduleConfObj) {
        var templateFolder = appConfObj.applicationPath + moduleConfObj.moduleFolder;

        console.log('Data Route Loaded');
        return [{
            state: 'list',
            config: {
                url: '/data/list',
                templateUrl: templateFolder + '/list.html',
                controller: 'PhoneListCtrl',
                controllerAs: 'phones'
            }
        }, {
            state: 'detail',
            config: {
                url: '/data/detail/:phoneId',
                templateUrl: templateFolder + '/detail.html',
                controller: 'PhoneDetailCtrl',
                controllerAs: 'phone'
            }
        }, {
            state: 'otherwise',
            config: {
                // TODO: Not working... To be investigated
                redirectTo: 'list'
                // url: '/data/list',
                // templateUrl: templateFolder + '/list.html',
                // controller: 'PhoneListCtrl',
                // controllerAs: 'phones'
            }
        }];
    }
})();
