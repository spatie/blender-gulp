'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');

const config = require('./config');

config.production = gutil.env.production;

require('./tasks/javascript');
require('./tasks/css');
require('./tasks/revision');

gulp.task('default', (callback) => {
    runSequence(['js', 'css'], 'revision', callback);
});

gulp.task('watch', () => {
    config.watching = true;

    return gulp.start('default');
});
