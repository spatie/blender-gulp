'use strict';

const gulp = require('gulp');
const minify = require('gulp-cssnano');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

const config = require('../config');

gulp.task('css:sass', () => {

    if (config.watch) {
        gulp.start('css:sass:compile');
        return gulp.watch(`${config.css.src}/**/*.scss`, ['css:sass:compile']);
    }

    return gulp.start('css:sass:compile');
});

gulp.task('css:sass:compile', () => {
    return gulp.src(`${config.css.src}/**/*.scss`)
        .pipe(sass({
            includePaths: config.css.sassInclude
        }))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('css:minify', () => {
    return gulp.src(`${config.css.dest}/**/*.css`)
        .pipe(minify())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('css', (callback) => {
    if (config.production) {
        runSequence('css:sass', 'css:minify', callback);
        return;
    }
    
    runSequence('css:sass', callback);
});
