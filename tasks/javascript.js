'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

const config = require('../config');

gulp.task('js:bundle', (callback) => {

    if (config.watching) {
        config.webpack.watch = true;
    }

    return gulp.src('')
        .pipe(plumber())
        .pipe(webpack(config.js.webpack))
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
