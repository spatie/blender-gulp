'use strict';

const exec = require('gulp-exec');
const gulp = require('gulp');
const log = require('../lib/log');
const runProcess = require('../lib/run-process');

gulp.task('watch', (callback) => {
    
    exec('webpack-dev-server --inline --hot --no-info', callback);
});

