'use strict';

const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

const configure = (module) => {

    const config = {
        context: path.resolve(process.cwd(), 'resources/assets'),
        output: {
            path: path.resolve(process.cwd(), 'public/assets'),
            filename: `${module}/[name].js`,
            chunkFilename: `${module}/[name].js`,
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
            new CleanWebpackPlugin(`public/assets/${module}`, {
                root: process.cwd(),
                verbose: false,
            }),
            new ExtractTextPlugin(`${module}-site`, `${module}/site.css`, { disable: !production }),
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

    if (production) {
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

    return config;
};

const modules = {
    front: configure('front'),
    back: configure('back'),
};

module.exports = {
    front: modules.front,
    back: modules.back,
    export: () => {
        return modules[process.env.WEBPACK_MODULE];
    },
};
