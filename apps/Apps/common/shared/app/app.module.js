// This is the module that would link all the shared modules together.
// Both Tablet and Phone application would include this module as a dependency

(function() {

    'use strict';

    var appModuleConfig = {
        applicationPath: 'shared/app/'
    };

    angular
        .module('Apps.app', [
            /* Angular modules */
            // Site-wide Angular dependencies could be added here
            // or they could also be added to "core" module (i.e. bnc.core)

            /* Shared application-wide modules */
            'Apps.data',
            'Apps.utils.exception',
            'Apps.utils.logger',
            'Apps.utils.router'

            /* Format-specific modules */

            /* Features/Pages */
        ])
        .value('AppsConf', appModuleConfig)
        .config(appConfigExceptionHandler)
        .config(appConfigLogger)
        .config(appConfigRouter)
        .run(function appsRun() {
            console.log('Apps.app module ready');
        });

    ////////// Functions //////////

    /* @ngInject */
    function appConfigExceptionHandler() {
        // Configure a common exception handling component
    }

    // /* @ngInject */
    function appConfigLogger($logProvider) {
        // Configure a common logging component
    }

    /* @ngInject */
    function appConfigRouter(routeHelperProvider) {
        // Configure a helper module for managing application routing
        // Currently Adam does something like this (though not very well)
    }

})();
