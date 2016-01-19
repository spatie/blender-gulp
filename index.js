'use strict';

const dotenv = require('dotenv');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');

dotenv.load({ path: path.resolve(process.cwd(), '.env')});

const config = require('./config');

require('./tasks/favicon');
require('./tasks/help');
require('./tasks/svg');
require('./tasks/webpack');

gulp.task('default', callback => {

    if (gutil.env.watch)
        config.context = 'watch';

    if (gutil.env.hot)
        config.context = 'hot';

    if (gutil.env.production)
        config.context = 'production';

    gulp.start(['webpack', 'svg'], callback);
});
