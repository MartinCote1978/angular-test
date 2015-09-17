// Exports task to automatically inject Bower components into the app.
// wiredep reads the index page and looks for specific comments then injects each
// dependency between the comments. (Look for <!-- bower:css --> and <!-- bower:js -->
// in index.html)
//
// https://github.com/stephenplusplus/grunt-wiredep
module.exports = {
    app: {
        src: [
            '<%= conf.app %>/index.html'
        ]
    }
};
