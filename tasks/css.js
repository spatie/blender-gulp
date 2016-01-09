const gulp = require('gulp');
const minify = require('gulp-cssnano');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

const config = require('../config');

gulp.task('css:sass', () => {
    return gulp.src(`${config.paths.css.src}/**/*.scss`)
        .pipe(sass({
            includePaths: config.css.sassInclude
        }))
        .pipe(gulp.dest(config.paths.css.src));
});

gulp.task('css:minify', () => {
    return gulp.src(`${config.paths.css.dest}/**/*.scss`)
        .pipe(minify())
        .pipe(gulp.dest(config.paths.css.dest));
});

gulp.task('css', (callback) => {
    if (config.production) {
        runSequence('css:sass', 'css:minify', callback);
    }
    
    runSequence('css:sass', callback);
});
