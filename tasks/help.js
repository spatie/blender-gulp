'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const pkg = require('../package.json');

gulp.task('help', () => {

    gutil.log('');
    gutil.log(gutil.colors.white('blender-gulp v' + pkg.version));
    gutil.log('');
    gutil.log(gutil.colors.black.bgCyan('Build tasks'));
    gutil.log(gutil.colors.green('gulp'), '               compile assets 📦');
    gutil.log(gutil.colors.green('gulp watch'), '         compile & watch for changes 👀');
    gutil.log(gutil.colors.green('gulp hot'), '           compile & assets from a hot reload server 🔥');
    gutil.log(gutil.colors.green('gulp --production'), '  compile & minify for production 🎉');
    gutil.log('');
    gutil.log(gutil.colors.black.bgCyan('Utilities'));
    gutil.log(gutil.colors.green('gulp favicon'), '       standalone utility for favicon generation 🌐');
    gutil.log('');
});
