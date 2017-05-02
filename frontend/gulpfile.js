'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',  () => {
  return gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
