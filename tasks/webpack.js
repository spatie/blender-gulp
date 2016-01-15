'use strict';

const exec = require('gulp-exec');
const gulp = require('gulp');
const log = require('../lib/log');

gulp.task('webpack', (callback) => {
    
    exec('webpack', (err, stdout, stderr) => {
        log.info(stdout);
        log.error(stderr);
        callback();
    });        
});

