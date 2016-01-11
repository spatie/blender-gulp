'use strict';

const _merge = require('lodash.merge');
const config = require('./index');

module.exports = {
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
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    sassLoader: {
        includePaths: [path.resolve(process.cwd(), 'node_modules')],
    },
    plugins: [],
};
