// Exports copy task
//
// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
    dev: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= conf.srcPath.root %>',
            dest: '<%= conf.buildPath.dev %>',
            src: [
                '*.{ico,png,txt}',
                '*.html',
                'shared/app/**/*.{js,html}',
                '!shared/app/**/*-spec.js',
                'phone/**/*.js',
                '!phone/**/*-spec.js',
                'tablet/**/*.js',
                '!tablet/**/*-spec.js',
                'shared/images/{,*/}*.*',
                'shared/fonts/{,*/}*.*'
            ]
        }]
    },
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= conf.srcPath.root %>',
            dest: '<%= conf.buildPath.dist %>',
            src: [
                '*.{ico,png,txt}',
                '*.html',
                'shared/app/**/*.{js,html}',
                '!shared/app/**/*-spec.js',
                'phone/**/*.js',
                '!phone/**/*-spec.js',
                'tablet/**/*.js',
                '!tablet/**/*-spec.js',
                'shared/images/{,*/}*.*',
                'shared/fonts/{,*/}*.*'
            ]
        }]
    }
};
