'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');

const config = require('../config');

gulp.task('webpack', (callback) => {

    const options = [];

    if (config.production) {
        options[] = '-p';
    }

    childProcess.spawn('webpack', options, { stdio: 'inherit' });
});
