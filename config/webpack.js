'use strict';

require('dotenv').load();

const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';
const devServerPort = process.env.WEBPACK_PORT || 3000;
const devServerProxy = process.env.WEBPACK_PROXY;

const config = {
    context: path.resolve(process.cwd(), 'resources/assets'),
    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: '[name]',
        publicPath: `http://localhost:${devServerPort}/`,
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
    plugins: [],
    sassLoader: {
        includePaths: [path.resolve(process.cwd(), 'node_modules')],
    },
    devServer: {
        port: devServerPort,
        contentBase: 'public',
        proxy: {
            '*': {
                target: devServerProxy,
                changeOrigin: true,
                autoRewrite: true,
                xfwd: true,
            },
        },
    },
};

if (production) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        })
    );
}

module.exports = config;
