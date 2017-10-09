const gulp = require('gulp');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

// MAKES CSS RESPONSIVE FOR MOST BROWSERS
gulp.task('autoprefixer', function () {
    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest/css'));
});