'use strict';

const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (PRODUCTION, MODULE) => {

    const config = {
        context: path.resolve(process.cwd(), 'resources/assets'),
        output: {
            path: path.resolve(process.cwd(), 'public/assets'),
            filename: `${MODULE}/[name].js`,
            chunkFilename: `${MODULE}/[name].js`,
            publicPath: '/assets/',
        },
        module: {
            hot: { accept: true },
            loaders: [
                {
                    test: /.jsx?$/,
                    loaders: ['react-hot', 'babel'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!sass'),
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'url?limit=250000',
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin('public/assets', {
                root: process.cwd(),
                verbose: false,
            }),
            new ExtractTextPlugin(`${MODULE}-site`, `${MODULE}/site.css`, { disable: !PRODUCTION }),
            function() {
                this.plugin('watch-run', function(watching, callback) {
                    console.log('Begin compile at ' + new Date());
                    callback();
                });
            },
        ],
        sassLoader: {
            includePaths: [path.resolve(process.cwd(), 'node_modules')],
        },
        postcss() {
            return [ autoprefixer ];
        },
        resolve: { extensions: ['', '.js', '.jsx', '.css', '.scss'], },
    };

    if (PRODUCTION) {
        config.plugins = config.plugins.concat([
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress : {
                    warnings: false,
                    screw_ie8 : true,
                },
                mangle : {
                    screw_ie8 : true,
                },
            }),
        ]);
    }

    return config;
};
