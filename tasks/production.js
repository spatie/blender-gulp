'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('production' (callback) => {

    runSequence(['webpack', 'svg'], 'revision', callback);
});
