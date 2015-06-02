var gulp        = require('gulp'),
	  jade        = require('gulp-jade'),
	  stylus      = require('gulp-stylus'),
	  watch       = require('gulp-watch'),
	  browserSync = require('browser-sync');

var path = {
	jadeTask   : 'myApp/jade/**/*.jade',
	stylusTask : 'myApp/stylus/**/*.styl'
};

var pathDest = {
	html : 'src/',
	css  : 'src/css/'
};

gulp.task('html',function(){
	return gulp.src(path.jadeTask)
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest(pathDest.html));
});

gulp.task('stylus',function(){
	return gulp.src(path.stylusTask)
		.pipe(stylus())
		.pipe(gulp.dest(pathDest.css));
});

gulp.task("browser-sync", function(){
    browserSync({
        server: {
            baseDir:'src/',
            directory: true
        },
        port: 3000
    });
});

var reload = browserSync.reload; 
var jadeTask   = ['html',reload];
var stylusTask = ['stylus',reload];

gulp.task('watch',function(){
	gulp.watch(path.jadeTask,jadeTask);
	gulp.watch(path.stylusTask,stylusTask);
});

gulp.task("server", ["browser-sync", "watch"]);