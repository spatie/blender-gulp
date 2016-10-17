const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');
const spawn = require('../lib/spawn');

const config = require('../config');

gulp.task('lint:js', (callback) => {
    spawn(
        'node_modules/.bin/eslint',
        [
            ...config.lint.js,
            '--fix',
            '--ext', '.js',
            '--ext', '.jsx',
            '--ext', '.vue',
        ],
        callback
    );
});

gulp.task('lint:sass', () => {
    gulp.src(config.lint.sass)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
