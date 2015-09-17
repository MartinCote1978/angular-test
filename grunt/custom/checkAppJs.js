// Exports task to verify the application's JavaScript code including the build script
module.exports = function(grunt) {
    grunt.registerTask('checkAppJs', [
        'newer:jshint:grunt',
        'newer:jshint:app',
        'newer:jscs:grunt',
        'newer:jscs:app'
    ]);
};
