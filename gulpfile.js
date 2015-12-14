var gulp 			= require('gulp');
var rename 			= require('gulp-rename');
var concat 			= require('gulp-concat');
var sass 			= require('gulp-sass');  				// SASS compiler
var minifyCSS 		= require('gulp-minify-css'); 			// CSS minify
var gutil 			= require('gulp-util');           		// Utility functions for gulp plugins (for example beep on errors)
var livereload 		= require('gulp-livereload');			// Automatically reload browser when saving a file
var notify 			= require('gulp-notify');				// Sweet notifications on your desktop
var plumber 		= require('gulp-plumber');				// Prevent pipe breaking caused by errors from gulp plugins
var cache 			= require('gulp-cache');
var autoprefixer 	= require('gulp-autoprefixer');         // Prefixes form old browsers



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
 *  BUILD PUBLIC HOME CSS
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
        .pipe(rename("sierra.css"))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
        
});

gulp.task('watch', ['sass'], function () {
    livereload.listen();
    gulp.watch('src/scss/**/*.scss', ['sass']);
});



/**
 *  Default tasks
 */

gulp.task('default', ['sass']);
