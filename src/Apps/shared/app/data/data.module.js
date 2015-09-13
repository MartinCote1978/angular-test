(function() {

    'use strict';

    angular.module('Apps.data', []);

    angular
        .module('Apps.data')
        .value('AppsDataConf', {
            moduleFolder: 'data'
        })
        .run(function appsDataRun() {
            console.log('Apps.data module ready');
        });

})();
