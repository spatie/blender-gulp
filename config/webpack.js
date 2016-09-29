const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

const context = (context) => process.env.WEBPACK_CONTEXT === context;

const ExtractFrontCss = new ExtractTextPlugin('front', 'front-[hash].css');
const ExtractBackCss = new ExtractTextPlugin('back', 'back-[hash].css');

const config = {
    context: path.resolve(process.cwd(), 'resources/assets'),
    output: {
        path: path.resolve(process.cwd(), 'public/build'),
        filename: context('production') ? '[name]-[hash].js' : '[name].js',
        chunkFilename: context('production') ? '[name]-[chunkhash].js' : '[name].js',
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                exclude: /node_modules/,
            }
        ],
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                include: /\/sass\/front\//,
                loader: ExtractFrontCss.extract('style', 'css!postcss!sass!import-glob-loader'),
            },
            {
                test: /\.scss$/,
                include: /\/sass\/back\//,
                loader: ExtractBackCss.extract('style', 'css!postcss!sass!import-glob-loader'),
            },
        ],
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'rev-manifest.json',
        }),
        ExtractFrontCss,
        ExtractBackCss,
        new webpack.NormalModuleReplacementPlugin(/\.(jpe?g|png|gif|svg)$/, 'node-noop'),
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
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
    },
};

if (!context('watch')) {
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

module.exports = config;
