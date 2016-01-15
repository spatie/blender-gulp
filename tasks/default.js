'use strict';

const gulp = require('gulp');

const config = require('../config');

gulp.task('default', (callback) => {

    if (config.production) {
        runSequence(['webpack', 'svg'], 'revision', callback);
    }

    runSequence(['webpack', 'svg'], callback);
});
