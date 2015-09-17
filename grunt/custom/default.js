// Exports the default task that runs tasks when simply typing 'grunt' at the terminal
module.exports = function(grunt) {
    grunt.registerTask('default', [
        'wiredep',
        'build'
    ]);
};
