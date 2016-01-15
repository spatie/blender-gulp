'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');
const webpack = require('webpack');

const config = require('../config');

gulp.task('webpack', (callback) => {

    if (config.watch) {
        runWebpackDevServer();
        return;
    }

    const options = config.production ? ['-p'] : [];

    return childProcess.spawn('webpack', options, { stdio: 'inherit' });
});

const runWebpackDevServer = () => {
    childProcess.spawn(
        'webpack-dev-server',
        [
            '--inline',
            '--hot',
            '--no-info',
        ],
        { stdio: 'inherit' }
    );
};
