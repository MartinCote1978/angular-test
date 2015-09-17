// Exports task to verify the JavaScript for Worklight adapters
module.exports = function(grunt) {
    grunt.registerTask('checkAdaptersJs', [
        'newer:jshint:adapters',
        'newer:jscs:adapters'
    ]);
};
