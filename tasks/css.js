'use strict';

const gulp = require('gulp');
const minify = require('gulp-cssnano');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

const config = require('../config');

gulp.task('css:sass', () => {
    return gulp.src(`${config.css.src}/**/*.scss`)
        .pipe(sass({
            includePaths: config.css.sassInclude
        }))
        .pipe(gulp.dest(config.css.src));
});

gulp.task('css:minify', () => {
    return gulp.src(`${config.css.dest}/**/*.scss`)
        .pipe(minify())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('css', (callback) => {
    if (config.production) {
        runSequence('css:sass', 'css:minify', callback);
    }
    
    runSequence('css:sass', callback);
});
