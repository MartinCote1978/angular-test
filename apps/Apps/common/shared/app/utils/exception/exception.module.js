/* Application-wide exception handling module */

(function() {

    'use strict';

    angular
        .module('Apps.utils.exception', [
            // add Angular depencies here...
        ])
        .run(function appsUtilsExceptionRun() {
            console.log('Apps.utils.exception module ready');
        });

})();
