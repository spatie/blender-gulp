'use strict';

const gulp = require('gulp');
const revision = require('gulp-rev');

gulp.task('revision', () => {
    gulp.src([`${config.js.dest}/**/*`, `${config.css.dest}/**/*`], { base: 'public' })
        .pipe(revision())
        .pipe(gulp.dest(config.paths.build))
        .pipe(revision.manifest())
        .pipe(gulp.dest(config.paths.build))
});
