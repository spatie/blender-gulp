'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');

gulp.task('webpack', (callback) => {
    childProcess.spawn('webpack', [], { stdio: 'inherit' });
});
