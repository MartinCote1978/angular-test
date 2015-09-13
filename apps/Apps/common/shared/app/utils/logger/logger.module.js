/* Application-wide logging module */

(function() {

    'use strict';

    angular
        .module('Apps.utils.logger', [
            // add Angular depencies here...
        ])
        .run(function appsUtilsLoggerRun() {
            console.log('Apps.utils.logger module ready');
        });

})();
