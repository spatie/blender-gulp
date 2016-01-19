'use strict';

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

const config = require('../config');

gulp.task('svg', () => {
    return gulp.src(`${config.svg.src}/**/*.svg`)
        .pipe(svgmin())
        .pipe(gulp.dest(config.svg.dest));
});
