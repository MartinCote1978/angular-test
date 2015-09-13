/* Help configure the state-base ui.router */

// TODO this is stub code taken from a demo project, review if everything here is used or not
// This is based on "HotTowel" project -- https://github.com/johnpapa/generator-hottowel

(function() {
    'use strict';

    angular
        .module('Apps.utils.router')
        .provider('routeHelper', routeHelperProvider);

    ////////// Functions //////////

    /* @ngInject */
    function routeHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        // This is a sample helper that would let modules add their routes to the application
        //
        // Usage:
        // The top-level module (bnc.app) includes the routing module (bnc.utils.router).
        // The routing module contains this "provider" which serves to add routes to
        // the application.
        // This makes it so each feature (like a section of the mobile app) can inject
        // its own routes.
        // The result, as each feature is added/replaced/removed the routes are always
        // up to date.

        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        /* jshint validthis:true */
        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;

        // $locationProvider.html5Mode(true); // uncomment this to use push state

        ////////// Functions //////////

        /* @ngInject */
        function RouterHelper($location, $rootScope, $state, logger) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ////////// Functions //////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to '/'.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        var destination;
                        var msg;

                        if (handlingStateChangeError) {
                            return;
                        }

                        stateCounts.errors++;
                        handlingStateChangeError = true;

                        destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');

                        logger.warning(msg, [toState]);
                        $location.path('/');
                    }
                );
            }

            function init() {
                handleRoutingErrors();
                // updateDocTitle();
            }

            function getStates() {
                return $state.get();
            }

            // function updateDocTitle() {
            //     $rootScope.$on('$stateChangeSuccess',
            //         function(event, toState, toParams, fromState, fromParams) {
            //             var title;

            //             stateCounts.changes++;
            //             handlingStateChangeError = false;

            //             title = config.docTitle + ' ' + (toState.title || '');
            //             $rootScope.title = title; // data bind to <title>
            //         }
            //     );
            // }
        }
    }
})();
