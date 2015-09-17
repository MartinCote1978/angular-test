// Exports clean task to erase previously generated files so you can start fresh
//
// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
    dev: [
        '<%= conf.buildPath.dev %>/'
    ],
    dist: [
        '<%= conf.buildPath.dist %>/index.html',
        '<%= conf.buildPath.dist %>/shared/',
        '<%= conf.buildPath.dist %>/phone/',
        '<%= conf.buildPath.dist %>/tablet/'
    ]
};
