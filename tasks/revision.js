'use strict';

const del = require('del');
const gulp = require('gulp');
const revision = require('gulp-rev');
const watch = require('gulp-debounced-watch');

const config = require('../config');

gulp.task('revision', () => {
    
    if (config.watch) {
        watch(
            [`${config.js.dest}/**/*`, `${config.css.dest}/**/*`],
            { debounceTimeout: 1000 },
            () => {
                gulp.start('revision:revise');
            }
        );
        return;
    }

    gulp.start('revision:revise');
});

gulp.task('revision:revise', () => {
    del(config.paths.build).then(() => {
        gulp.src([`${config.js.dest}/**/*`, `${config.css.dest}/**/*`], { base: 'public' })
            .pipe(revision())
            .pipe(gulp.dest(config.paths.build))
            .pipe(revision.manifest())
            .pipe(gulp.dest(config.paths.build));

        gutil.log('Assets have been revised');
    });
});
