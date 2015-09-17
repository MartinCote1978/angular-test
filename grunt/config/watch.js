// Exports the watch task used during development to perform actions as files are modified.
// Example: when saving a javascript files it can check code quality or when saving a
// less file it can compile it to CSS file.
//
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    bower: {
        files: [
            'bower.json'
        ],
        tasks: [
            'wiredep'
        ]
    },
    html: {
        files: '<%= globs.html %>',
        tasks: [
            'newer:copy'
        ]
    },
    gruntfile: {
        files: [
            'gruntfile.js',
            'grunt/{,*/}*.js'
        ],
        tasks: [
            'checkAppJs'
        ]
    },
    js: {
        files: '<%= globs.js %>',
        tasks: [
            'checkAppJs',
            'newer:copy'
        ]
    },
    less: {
        files: [].concat('<%= globs.less.shared %>')
                 .concat('<%= globs.less.phone %>')
                 .concat('<%= globs.less.tablet %>'),
        tasks: [
            'less:dev'
        ]
    }
};
