const dotenv = require('dotenv');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');

dotenv.load({ path: path.resolve(process.cwd(), '.env')});

const config = require('./config');

require('./tasks/help');
require('./tasks/lint');
require('./tasks/svg');
require('./tasks/webpack');

gulp.task('default', callback => {

    if (gutil.env.production) {
        config.context = 'production';
    }

    gulp.start(['webpack', 'svg'], callback);
});

gulp.task('watch', callback => {

    config.context = 'watch';

    gulp.start(['webpack', 'svg'], callback);
});
