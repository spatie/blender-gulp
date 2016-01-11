'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const handleError = require('../lib/handle-error');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

const config = require('../config');

gulp.task('js:bundle', (callback) => {

    if (! config.js.webpack) {
        gutil.log('No webpack config provided');
        return;
    }

    if (config.watch) {
        config.js.webpack.watch = true;
    }

    return gulp.src('')
        .pipe(webpack(config.js.webpack).on('error', handleError))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('js:minify', () => {
    return gulp.src(`${config.js.dest}/**/*`)
        .pipe(uglify())
        .pipe(gulp.dest(config.js.dest))
});

gulp.task('js', (callback) => {
    if (config.production) {
        runSequence('js:bundle', 'js:minify', callback);
        return;
    }
    
    runSequence('js:bundle', callback);
});
