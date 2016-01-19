'use strict';

const gulp = require('gulp');
const spawn = require('../lib/spawn');
const webpack = require('webpack');

const config = require('../config');

gulp.task('webpack', callback => {

    if (config.context === 'production') {
        process.env.NODE_ENV = 'production';
    }

    process.env.WEBPACK_CONTEXT = config.context;

    if (config.context === 'hot') {
        runWebpackDevServer();
        return;
    }

    const options = [];

    if (config.context === 'watch') {
        options.push('-w');
    }

    spawn('webpack', options, callback);
});

const runWebpackDevServer = () => {

    const options = [
        '--inline',
        '--hot',
    ];

    spawn('webpack-dev-server', options, callback);
};
