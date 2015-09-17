// Exports build task that runs a series of tasks when building the application's frontend
module.exports = function(grunt) {
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            // if grunt serve:dist was run
            return grunt.task.run([
                'build',
                'browserSync:dist'
            ]);
        }

        // otherwise if grunt serve was run
        grunt.task.run([
            'build',
            'browserSync:livereload',
            'watch'
        ]);
    });
};
