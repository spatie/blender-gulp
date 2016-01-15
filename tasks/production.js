'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('../config');

gulp.task('production', (callback) => {

    config.production = true;

    runSequence(['webpack', 'svg'], 'revision', callback);
});
