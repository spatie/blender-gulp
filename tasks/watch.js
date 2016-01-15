'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');

gulp.task('watch', (callback) => {

    return gulp.start('webpack-dev-server');
});
