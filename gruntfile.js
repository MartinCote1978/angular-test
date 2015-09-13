'use strict';

// Grunt Tutorials:
// http://gruntjs.com/getting-started
// http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/

module.exports = function(grunt) {

    var path = require('path');

    ////////// Configuration //////////

    var appPath = require('./bower.json').appPath;

    // This sets up variables used in other Grunt tasks.
    // It creates references to folder paths and file names
    // so they do not need to be hard coded in multiple tasks.
    var conf = {
        app: appPath,
        working: '.tmp',
        bower: 'bower_components',
        srcPath: {
            root: appPath + '/',
            shared: appPath + '/shared',
            tablet: appPath + '/tablet',
            phone: appPath + '/phone',
        },
        buildPath: {
            dev: '.tmp/common',
            dist: 'apps/Apps/common'
        }
    };

    // This sets up file matching used by Grunt tasks. Rather than list out every file
    // used by a task globs let you specify multiple files at one
    //
    // https://github.com/isaacs/node-glob#glob-primer
    // https://en.wikipedia.org/wiki/Glob_(programming)
    var globs = {
        grunt: [
            'gruntfile.js',
            'grunt/config/{,*/}*.js',
            'grunt/custom/{,*/}*.js'
        ],
        js: [
            '<%= conf.srcPath.shared %>/app/**/*.js',
            '!<%= conf.srcPath.shared %>/app/**/*-spec.js', // disregard testing specs
            '<%= conf.srcPath.phone %>/**/*.js',
            '!<%= conf.srcPath.phone %>/**/*-spec.js', // disregard testing specs
            '<%= conf.srcPath.tablet %>/**/*.js',
            '!<%= conf.srcPath.tablet %>/**/*-spec.js' // disregard testing specs
        ],
        less: {
            shared: [
                '<%= conf.srcPath.shared %>/less/**/*.less',
                '<%= conf.srcPath.shared %>/app/**/*.less',
            ],
            phone: [
                '<%= conf.srcPath.phone %>/**/*.less'
            ],
            tablet: [
                '<%= conf.srcPath.tablet %>/**/*.less'
            ]
        },
        html: [
            '<%= conf.srcPath.root %>/index.html',
            '<%= conf.srcPath.shared %>/app/**/*.html',
            '<%= conf.srcPath.phone %>/**/*.html',
            '<%= conf.srcPath.tablet %>/**/*.html'
        ]
    };

    require('time-grunt')(grunt);

    // This reads the tasks in the grunt folder and imports them here
    //
    // http://ericnish.io/blog/how-to-neatly-separate-grunt-files
    require('load-grunt-config')(grunt, {

        // Existing task configuration
        configPath: path.join(process.cwd(), 'grunt/config'),

        // Custom tasks
        jitGrunt: {
            customTasksDir: 'grunt/custom'
        },

        // Pass in data needed by tasks
        data: {
            conf: conf,
            globs: globs
        }
    });

};
