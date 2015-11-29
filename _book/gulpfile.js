var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell')
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('serve', shell.task(['gitbook serve']));
gulp.task('build', shell.task(['gitbook build']));

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['shell']);
