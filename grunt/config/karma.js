// Exports task to run the Karma testing tool.
//
// https://github.com/karma-runner/grunt-karma
// http://karma-runner.github.io/0.12/index.html
module.exports = {
    unit: {
        configFile: 'karma.conf.js',
        singleRun: true
    }
};
