// Exports utility task that prints Grunt's configuration details to the terminal
module.exports = function(grunt) {
    grunt.registerTask('printGruntConfig', function() {
        grunt.log.writeln(JSON.stringify(grunt.config(), null, 4));
    });
};
