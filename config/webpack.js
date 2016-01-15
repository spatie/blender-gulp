'use strict';

const path = require('path');
const logTimestamp = require('../lib/log-timestamp');

const config = require('./config');

module.exports = {
    context: path.resolve(process.cwd(), 'resources/assets'),
    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: '[name]',
        publicPath: `http://localhost:${config.webpack.port}/`,
    },
    module: {
        hot: {
            accept: true
        },
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
    },
    plugins: [logTimestamp('Compiling...')],
    sassLoader: {
        includePaths: [path.resolve(process.cwd(), 'node_modules')],
    },
    devServer: {
        port: config.webpack.port,
        contentBase: 'public',
        proxy: {
            '*': {
                target: config.webpack.proxy,
                changeOrigin: true,
                autoRewrite: true,
                xfwd: true,
            },
        },
    },
};
