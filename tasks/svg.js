'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

const config = require('../config');

gulp.task('svg:minify', () => {
    return gulp.src(`${config.svg.src}/**/*.svg`)
        .pipe(svgmin())
        .pipe(gulp.dest(config.svg.dest));
});

gulp.task('svg', () => {
    
    if (config.watch) {
        gulp.start('svg:minify');
        return gulp.watch(`${config.svg.src}/**/*.svg`, ['svg:minify']);
    }

    return gulp.start('svg:minify');
});
