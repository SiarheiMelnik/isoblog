'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    exorcist = require('exorcist'),
    reactify = require('reactify');


gulp.task('bundle:dev', function() {
    var b = browserify({
        entries: ['./app.js'],
        transform: [reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var bundler = watchify(b);

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .on('error', $.util.log.bind($.util, 'bundle error'))
            .pipe(exorcist('./build/bundle.js.map'))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./build'));
    }

    return rebundle();
});

gulp.task('bundle:prod', function() {
    var b = browserify({
        entries: ['./app.js'],
        transform: [reactify],
        debug: false
    });

    function rebundle() {
        return b.bundle()
            .on('error', $.util.log.bind($.util, 'bundle error'))
            .pipe(source('bundle.js'))
            .pipe($.streamify($.uglify()))
            .pipe(gulp.dest('./build'));
    }

    return rebundle();
});


gulp.task('less', function () {
    return gulp.src('./less/main.less')
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('./less/*.less', ['less'])
});


gulp.task('default', ['bundle:dev', 'less', 'watch']);
