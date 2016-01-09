'use strict';

const del = require('del');
const gulp = require('gulp');
const revision = require('gulp-rev');

const config = require('../config');

gulp.task('revision', () => {

    del(config.paths.build);

    return gulp.src([`${config.js.dest}/**/*`, `${config.css.dest}/**/*`], { base: 'public' })
        .pipe(revision())
        .pipe(gulp.dest(config.paths.build))
        .pipe(revision.manifest())
        .pipe(gulp.dest(config.paths.build))
});
