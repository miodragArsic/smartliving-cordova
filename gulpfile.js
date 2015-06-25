var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var server = require('gulp-express');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sequence = require('run-sequence');


var paths = {
    lessStyles: {
        source: [],
        destination: 'dist/css'
    },
    libraries: {
        source: [
        'bower_components/angular/angular.js',
        'bower_components/angular-loader/angular-loader.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/ui-router/release/angular-ui-router.js'
        ],
        destination: 'dist/js'
    },
    aplicationScripts: {
        source: [
        'app.js',
        'components/libs/*.js',
        'signin/signin.controller.js',
        'signup/signup.controller.js',
        'home/home.controller.js',
        'components/**/*.js'
        ],
        destination: 'dist/js'
    }
};

// less 

gulp.task('build:less_styles', function() {
    return gulp.src(paths.lessStyles.source)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.lessStyles.destination));
});

gulp.task('watch:less_styles', function() {
    watch(paths.lessStyles.source, function(files, callback) {
        gulp.start('build:less_styles', callback);
    })
});

// angular app

gulp.task('build:aplication_scripts', function() {
    return gulp.src(paths.aplicationScripts.source)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.aplicationScripts.destination));
});

gulp.task('watch:aplication_scripts', function() {
	watch(paths.aplicationScripts.source, function(files, callback) {
		gulp.start('build:aplication_scripts', callback);
	})
})

// vendor skripte

gulp.task('build:libraries', function() {
    return gulp.src(paths.libraries.source)
        .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.libraries.destination));
});

gulp.task('watch:libraries', function() {
	watch(paths.libraries.source, function(files, callback) {
		gulp.start('build:libraries', callback);
	})
})

// taskovi

gulp.task('build', [
    'build:less_styles',
    'build:aplication_scripts',
    'build:libraries'
]);

gulp.task('watch', [
    'watch:less_styles',
    'watch:aplication_scripts',
    'watch:libraries'
]);


gulp.task('default', function(callback) {
    sequence('build', 'watch', callback)
});
