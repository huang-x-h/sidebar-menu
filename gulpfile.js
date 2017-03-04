'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/sidebar-menu.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass'])
})

gulp.task('default', ['sass'], function () {
  return gulp.src('./sidebar-menu.js')
    .pipe(gulp.dest('./dist'));
});
