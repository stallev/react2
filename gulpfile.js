
'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
