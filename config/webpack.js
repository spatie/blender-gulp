'use strict';

const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

const context = (context) => process.env.WEBPACK_CONTEXT === context;

const ExtractFrontCss = new ExtractTextPlugin('front', 'front.css', { disable: !context('production') });
const ExtractBackCss = new ExtractTextPlugin('back', 'back.css', { disable: !context('production') });

const config = {
    context: path.resolve(process.cwd(), 'resources/assets'),
    output: {
        path: path.resolve(process.cwd(), 'public/build'),
        filename: `[name].js`,
        chunkFilename: `[name].js`,
        publicPath: '/build/',
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
                include: /\/sass\/front\//,
                loader: ExtractFrontCss.extract('style', ['css', 'sass']),
            },
            {
                test: /\.scss$/,
                include: /\/sass\/back\//,
                loader: ExtractBackCss.extract('style', ['css', 'sass']),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url?limit=250000',
            },
        ],
    },
    plugins: [
        new ManifestPlugin({ fileName: 'rev-manifest.json' }),
        ExtractFrontCss,
        ExtractBackCss,
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

if (!context('watch') && !context('hot')) {
    config.plugins = config.plugins.concat([
        new CleanWebpackPlugin('public/build', {
            root: process.cwd(),
            verbose: false,
        }),
    ]);
}

if (context('production')) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
            },
            mangle: {
                screw_ie8: true,
            },
        }),
    ]);
}

config.devServer = {
    port: process.env.WEBPACK_PORT,
    contentBase: 'public',
    proxy: {
        '*': {
            target: process.env.WEBPACK_PROXY,
            changeOrigin: true,
            autoRewrite: true,
            xfwd: true,
        },
    },
};

module.exports = config;
