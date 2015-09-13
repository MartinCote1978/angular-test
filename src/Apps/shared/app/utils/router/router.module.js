(function() {

    'use strict';

    angular
        .module('Apps.utils.router', [
            // add Angular depencies here...
            'ui.router'
        ])
        .run(function appsUtilsRouterRun() {
            console.log('Apps.utils.router module ready');
        });

})();
