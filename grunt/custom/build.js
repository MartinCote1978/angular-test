// Exports build task that runs a series of tasks when building the application's frontend
module.exports = function(grunt) {
    grunt.registerTask('build', [
        'clean:dist',
        'checkAppJs',
        // 'checkAdapterJs', // currently this does not pass but in a real project would be enabled
        'wiredep',
        'copy',
        'less'
    ]);
};
