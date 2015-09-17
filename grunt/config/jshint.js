// Exports task to check JavaScript code quality. It has different "targets" for checking
// the application code, adapters and grunt build files using different sets of rules. (Since adapters
// are legacy they likely need to checked against more relaxed rules.)
//
// https://github.com/gruntjs/grunt-contrib-jshint
// http://jshint.com/docs/
module.exports = {
    grunt: {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        src: '<%= globs.grunt %>'
    },
    app: {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        src: '<%= globs.js %>'
    },
    adapters: {
        options: {
            jshintrc: '<%= conf.srcPath.adapters %>/.jshintrc',
            reporter: require('jshint-stylish')
        },
        src: [
            '<%= conf.srcPath.adapters %>/{,*/}*.js'
        ]
    }
};
