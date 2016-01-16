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

    childProcess.spawn('webpack', [], { stdio: 'inherit', env: process.env });
});

const runWebpackDevServer = () => {

    const options = [
        '--inline',
        '--hot',
    ];

    if (! config.verbose) {
        options.push('--quiet');
    }

    childProcess.spawn('webpack-dev-server', options, { stdio: 'inherit', env: process.env } );
};
