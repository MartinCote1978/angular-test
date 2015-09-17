// Exports task for running a server
// WARNING this task doesn't run properly by itself. it needs t0 have the watch task run after it (???)
// run this task via grunt serve task
//
// https://github.com/BrowserSync/grunt-browser-sync
module.exports = {
    options: {
        notify: false
    },
    livereload: {
        bsFiles: {
            src: '<%= conf.working %>/common/**/*.*'
        },
        options: {
            port: 9000,
            background: true,
            watchTask: true,
            server: {
                baseDir: '<%= conf.buildPath.dev %>',
                routes: {
                    '/bower_components': 'src/bower_components'
                }
            }
        }
    },
    dist: {
        options: {
            background: false,
            server: {
                baseDir: '<%= conf.buildPath.dist %>',
                routes: {
                    '/bower_components': 'src/bower_components'
                }
            }
        }
    }
};
