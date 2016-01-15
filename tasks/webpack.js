'use strict';

const childProcess = require('child_process');
const gulp = require('gulp');
const webpack = require('webpack');

const config = require('../config');
const webpackConfig = require('../config/webpack');

gulp.task('webpack', (callback) => {

    const options = [];

    if (config.production) {
        options.push('-p');

        webpackConfig.plugins.push([
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]);
    }

    childProcess.spawn('webpack', options, { stdio: 'inherit' });
});
