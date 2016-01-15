'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');

gulp.task('webpack-dev-server', (callback) => {

    const options = [
        '--inline',
        '--hot',
        '--no-info',
    ];

    childProcess.spawn('webpack-dev-server', options, { stdio: 'inherit' });
});
