'use strict';

const _merge = require('lodash.merge');
const config = require('./index');
const path = require('path');

module.exports = {
    js: {
        context: path.resolve(process.cwd(), 'resources/assets'),
        output: {
            path: path.resolve(process.cwd(), 'public'),
            filename: '[name]',
        },
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
        plugins: [],
    },
    css: {
        context: path.resolve(process.cwd(), 'resources/assets'),
        output: {
            path: path.resolve(process.cwd(), 'public'),
            filename: '[name]',
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass'],
                }
            ],
        },
        sassLoader: {
            includePaths: [path.resolve(process.cwd(), 'node_modules')],
        },
        plugins: [],
    },
};
