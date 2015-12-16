var gulp          = require('gulp'),
$ = require('gulp-load-plugins')({pattern: ['gulp-*']});


/**
*  Error handling
*/

var onError = function (err) {
	$.notify.onError({
		title: "Gulp",
		subtitle: "Failure!",
		message: "Error: <%= error.message %>",
		sound: "Beep"
	})(err);
	this.emit('end');
};


/**
*  Build development files
*/

gulp.task('sass', function () {
	return gulp.src('src/styles.scss')
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.sourcemaps.init())
	.pipe($.sass({compress: false}).on('error', $.util.log))
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.rename({
		basename: 'sierra'
	}))
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest('dev'));
});


/**
*  Build production files
*/

gulp.task('build:sass', function () {
	return gulp.src('src/styles.scss')
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.sass({compress: false}).on('error', $.util.log))
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.combineMq({beautify: false}))
	.pipe($.csso())
	.pipe($.csscomb())
	.pipe($.minifyCss({keepSpecialComments: false, mediaMerging: true, roundingPrecision: 4, advanced: true, aggressiveMerging: true}))
	.pipe($.rename({
		basename: 'sierra',
		suffix: '.min'
	}))
	.pipe(gulp.dest('dist'));
});

/**
*  Default tasks
*/

gulp.task('default', ['sass']);

/**
*  Build production ready sass
*/
gulp.task('build', ['build:sass']);
