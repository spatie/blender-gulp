'use strict';

const del = require('del');
const gulp = require('gulp');
const revision = require('gulp-rev');

const config = require('../config');

gulp.task('revision', () => {
    
    const files = config.rev.files.map(file => `${config.rev.base}/${file}`);

    del(config.rev.files).then(() => {
        gulp.src(files, { base: config.rev.base })
            .pipe(revision())
            .pipe(gulp.dest(config.rev.base));
    });
});
