'use strict';

const gulp = require('gulp');

const config = require('./config');

require('./tasks/favicon');
require('./tasks/svg');
require('./tasks/webpack');

gulp.task('default', (callback) => {
    if (config.production) {
        process.env.NODE_ENV = 'production';
    }

    gulp.start(['webpack', 'svg'], callback);
});

gulp.task('watch', (callback) => {
    config.watch = true;

    gulp.start(['webpack', 'svg'], callback);
});
