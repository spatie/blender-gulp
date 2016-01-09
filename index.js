'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('./config');

require('./tasks/css');
require('./tasks/favicon');
require('./tasks/javascript');
require('./tasks/revision');
require('./tasks/svg');

gulp.task('default', () => {
    runSequence(['js', 'css'], 'revision');
});

gulp.task('watch', (callback) => {
    config.watch = true;

    if (config.production) {
        throw new Error('You can\'t watch in production mode.');
    }

    return gulp.start(['js', 'css', 'revision']);
});
