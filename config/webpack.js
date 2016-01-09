'use strict';

const _merge = require('lodash.merge');
const config = require('./index');

module.exports = {
    context: `${process.cwd()}/${config.js.src}`,
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};
