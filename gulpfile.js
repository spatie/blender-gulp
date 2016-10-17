const gulp = require('gulp');
const gutil = require('gulp-util');

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
