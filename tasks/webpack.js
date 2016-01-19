'use strict';

const gulp = require('gulp');
const spawn = require('../lib/spawn');
const webpack = require('webpack');

const config = require('../config');

gulp.task('webpack', (callback) => {

    if (config.watch) {
        runWebpackDevServer();
        return;
    }

    spawn('webpack', [], callback);
});

const runWebpackDevServer = () => {

    const options = [
        '--inline',
        '--hot',
    ];

    spawn('webpack-dev-server', options, callback);
};
