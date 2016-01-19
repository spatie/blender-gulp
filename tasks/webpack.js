'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const spawn = require('child_process').spawn;
const webpack = require('webpack');

const config = require('../config');

gulp.task('webpack', (callback) => {

    if (config.watch) {
        runWebpackDevServer();
        return;
    }

    spawn('webpack', [], { stdio: 'inherit', env: process.env })
        .on('close', code => code !== 1 ? callback() : null);
});

const runWebpackDevServer = () => {

    const options = [
        '--inline',
        '--hot',
    ];

    spawn('webpack-dev-server', options, { stdio: 'inherit', env: process.env } )
        .on('close', code => code !== 1 ? callback() : null);
};
