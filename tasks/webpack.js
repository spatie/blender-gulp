const gulp = require('gulp');
const spawn = require('../lib/spawn');

const config = require('../config');

gulp.task('webpack', callback => {

    if (config.context === 'production') {
        process.env.NODE_ENV = 'production';
    }

    process.env.WEBPACK_CONTEXT = config.context;

    if (config.context === 'hot') {
        runWebpackDevServer(callback);
        return;
    }

    const options = [];

    if (config.context === 'watch') {
        options.push('-w');
    }

    spawn('webpack', options, callback);
});

const runWebpackDevServer = callback => {

    const options = [
        '--inline',
        '--hot',
    ];

    spawn('webpack-dev-server', options, callback);
};
