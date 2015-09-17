// Exports task to check JavaScript code style. It has different "targets" for checking
// the application code, adapters and grunt build files using different sets of rules.
//
// https://github.com/jscs-dev/grunt-jscs
// http://jscs.info/
module.exports = {
    grunt: {
        options: {
            config: '.jscsrc'
        },
        src: '<%= globs.grunt %>'
    },
    app: {
        options: {
            config: '.jscsrc'
        },
        src: '<%= globs.js %>'
    },
    adapters: {
        options: {
            config: '<%= conf.srcPath.adapters %>/.jscsrc'
        },
        src: [
            '<%= conf.srcPath.adapters %>/{,*/}*.js'
        ]
    }
};
