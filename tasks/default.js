'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

const config = require('../config');

gulp.task('default', (callback) => {

    if (config.production) {
        runSequence(['webpack', 'svg'], 'revision', callback);
        return;
    }

    runSequence(['webpack', 'svg'], callback);
});
