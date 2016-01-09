'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('./config');

require('./tasks/css');
require('./tasks/favicon');
require('./tasks/javascript');
require('./tasks/revision');
require('./tasks/svg');

gulp.task('default', (callback) => {
    runSequence(['js', 'css'], 'revision', callback);
});

gulp.task('watch', () => {
    config.watching = true;

    return gulp.start('default');
});
