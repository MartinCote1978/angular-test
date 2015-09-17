// Exports task to unit test the JavaScript. (Currently just a stub task)
module.exports = function(grunt) {
    grunt.registerTask('test', [
        'clean:dev',
        'wiredep',
        // 'connect:test',
        'karma'
    ]);
};
