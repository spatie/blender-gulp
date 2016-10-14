const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');

const config = require('../config');

gulp.task('lint:sass', function () {
    gulp.src(config.lint.sass)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
