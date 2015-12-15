var gulp          = require('gulp');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var sass          = require('gulp-sass');           // SASS compiler
var minifyCSS     = require('gulp-minify-css');     // CSS minify
var gutil         = require('gulp-util');           // Utility functions for gulp plugins (for example beep on errors)
var notify        = require('gulp-notify');         // Sweet notifications on your desktop
var plumber       = require('gulp-plumber');        // Prevent pipe breaking caused by errors from gulp plugins
var autoprefixer  = require('gulp-autoprefixer');   // Prefixes for old browsers


/**
 *  Error handling
 */

var onError = function (err) {
  notify.onError({
    title: "Gulp",
    subtitle: "Failure!",
    message: "Error: <%= error.message %>",
    sound: "Beep"
  })(err);
  this.emit('end');
};


/**
 *  Build production files
 */

gulp.task('sass', function () {
  return gulp.src('src/styles.scss')
  .pipe(plumber({errorHandler: onError}))
  .pipe(sass({compress: false}).on('error', gutil.log))
  .pipe(autoprefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
  .pipe(minifyCSS({keepBreaks: false}))
  .pipe(rename("sierra.min.css"))
  .pipe(gulp.dest('dist'));
});


/**
 *  Default tasks
 */

gulp.task('default', ['sass']);
