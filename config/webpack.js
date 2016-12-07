const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

const context = context => process.env.WEBPACK_CONTEXT === context;

module.exports = ({ versioning = true } = {}) => {

    const extractCss = new ExtractTextPlugin(
        '[name]', 
        versioning && context('production') ? '[name]-[hash].css' : '[name].css'
    );

    const config = {
        context: path.resolve(process.cwd(), 'resources/assets'),
        output: {
            path: path.resolve(process.cwd(), 'public/build'),
            filename: versioning && context('production') ? '[name]-[hash].js' : '[name].js',
            chunkFilename: versioning && context('production') ? '[name]-[chunkhash].js' : '[name].js',
            publicPath: '/build/',
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.vue', '.css', '.scss'],
        },
        module: {
            preLoaders: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'eslint',
                    exclude: /node_modules/,
                },
            ],
            loaders: [
                {
                    test: /.jsx?$/,
                    loaders: ['babel'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.vue$/,
                    loaders: ['vue'],
                },
                {
                    test: /\.scss$/,
                    loader: extractCss.extract('style', 'css!postcss!sass!import-glob-loader'),
                },
            ],
        },
        plugins: [
            extractCss,
            new webpack.NormalModuleReplacementPlugin(/\.(jpe?g|png|gif|svg)$/, 'node-noop'),
            function () {
                this.plugin('watch-run', function (watching, callback) {
                    process.stdout.write('\x1B[2J\x1B[0f');
                    callback();
                });
            },
        ],
        sassLoader: {
            includePaths: [
                path.resolve(process.cwd(), 'node_modules'),
            ],
        },
        postcss() {
            return [autoprefixer];
        },
    };

    if (versioning) {
        config.plugins = config.plugins.concat([
            new ManifestPlugin({
                fileName: 'rev-manifest.json',
            }),
        ]);
    }

    if (! context('watch')) {
        config.plugins = config.plugins.concat([
            new CleanWebpackPlugin('public/build', {
                root: process.cwd(),
                verbose: false,
            }),
        ]);
    }

    if (context('production')) {
        config.plugins = config.plugins.concat([
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': '"production"',
                },
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                mangle: true,
                screw_ie8: true,
            }),
        ]);
    }

    return config;
};
