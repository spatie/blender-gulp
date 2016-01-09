const gulp = require('gulp');
const revision = require('gulp-rev');

gulp.task('revision', () => {
    gulp.src(['public/js/**/*', 'public/css/**/*'], { base: 'public' })
        .pipe(revision())
        .pipe(gulp.dest('public/build'))
        .pipe(revision.manifest())
        .pipe(gulp.dest('public/build'))
});
