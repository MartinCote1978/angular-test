// Exports less task to compile LESS code into CSS.
//
// https://github.com/gruntjs/grunt-contrib-less
// http://lesscss.org/
module.exports = {
    dev: {
        options: {
            paths: [
                '<%= conf.app %>'
            ]
        },
        files: {
            '<%= conf.buildPath.dev %>/shared/shared.css': '<%= globs.less.shared %>',
            '<%= conf.buildPath.dev %>/phone/phone.css': '<%= globs.less.phone %>',
            '<%= conf.buildPath.dev %>/tablet/tablet.css': '<%= globs.less.tablet %>'
        }
    },
    dist: {
        options: {
            paths: [
                '<%= conf.app %>'
            ],
            compress: true,
            sourceMap: true
        },
        files: {
            '<%= conf.buildPath.dist %>/shared/shared.css': '<%= globs.less.shared %>',
            '<%= conf.buildPath.dist %>/phone/phone.css': '<%= globs.less.phone %>',
            '<%= conf.buildPath.dist %>/tablet/tablet.css': '<%= globs.less.tablet %>'
        }
    }
};
