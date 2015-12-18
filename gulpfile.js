var gulp = require('gulp'),
$ = require('gulp-load-plugins')({pattern: ['gulp-*']}),
paths = {src: 'src/', dist: 'dist/', dev: 'dev/', entry: 'entry.scss'};

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
*  Default tasks
*/

gulp.task('default', function() {
	return $.rubySass(paths.src+paths.entry, {style: 'expanded', precision: 4, require: ['sass-globbing', 'breakpoint', 'susy']})
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.sourcemaps.init())
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.rename({
		basename: 'sierra'
	}))
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest(paths.dev))
	.pipe($.size({title: 'Development', showFiles: true}));
});

/**
*  Build production ready sass
*/
gulp.task('build', function() {
	return $.rubySass(paths.src+paths.entry, {style: 'compact', precision: 4, require: ['sass-globbing', 'breakpoint', 'susy']})
	.pipe($.plumber({errorHandler: onError}))
	.pipe($.autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe($.combineMq({beautify: false}))
	.pipe($.csso())
	.pipe($.csscomb())
	.pipe($.cssmin({advanced: true, aggressiveMerging: true, keepSpecialComments: false, semanticMerging: true}))
	.pipe($.rename({
		basename: 'sierra',
		suffix: '.min'
	}))
	.pipe(gulp.dest(paths.dist))
	.pipe($.size({title: 'Production', showFiles: true}));
});
