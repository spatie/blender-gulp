'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

const config = require('../config');

gulp.task('svg', () => {
    return gulp.src(config.paths.svg.src)
        .pipe(svgmin())
        .pipe(gulp.dest(config.paths.svg.dest));
});
