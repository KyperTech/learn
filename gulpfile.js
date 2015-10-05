var gulp        = require('gulp');
var shell = require('gulp-shell');

gulp.task('serve', shell.task(['gitbook serve']));
gulp.task('build', function(){
  return gulp.src([
    './_book/**',
  ], {base: '_book'})
  .pipe(gulp.dest('./'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);
