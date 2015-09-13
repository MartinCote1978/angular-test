(function() {

    'use strict';

    /**
     * @module utils.logger
     */
    angular
        .module('Apps.utils.logger')
        .factory('logger', logger);

    ////////// Functions //////////

    /* @ngInject */
    function logger($log) {
        var service = {
            error: errorFn,
            info: infoFn,
            success: successFn,
            warning: warningFn,
        };

        return service;

        ////////// Functions //////////

        function errorFn(message) {
            // implementation
        }

        function infoFn(message) {
            // implementation
        }

        function successFn(message) {
            // implementation
        }

        function warningFn(message) {
            // implementation
        }

    }

})();
