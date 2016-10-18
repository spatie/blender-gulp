const gulp = require('gulp');
const spawn = require('../lib/spawn');

const config = require('../config');

gulp.task('webpack', (callback) => {

    if (config.context === 'production') {
        process.env.NODE_ENV = 'production';
    }

    process.env.WEBPACK_CONTEXT = config.context;

    const options = [];

    if (config.context === 'watch') {
        options.push('-w');
    }

    spawn('node_modules/.bin/webpack', options, callback);
});
