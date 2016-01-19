'use strict';

const dotenv = require('dotenv');
const gulp = require('gulp');
const path = require('path');

dotenv.load({ path: path.resolve(process.cwd(), '.env')});

const config = require('./config');

require('./tasks/favicon');
require('./tasks/svg');
require('./tasks/webpack');

gulp.task('default', callback => {

    if (config.production) {
        process.env.NODE_ENV = 'production';
    }

    gulp.start(['webpack', 'svg'], callback);
});

gulp.task('watch', callback => {

    config.watch = true;

    gulp.start(['webpack', 'svg'], callback);
});
