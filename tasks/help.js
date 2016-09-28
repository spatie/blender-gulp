const gulp = require('gulp');
const gutil = require('gulp-util');
const versions = require('../lib/versions');

gulp.task('help', () => {

    gutil.log('');
    gutil.log('');
    gutil.log(gutil.colors.black.bgWhite('Versions'));
    gutil.log(gutil.colors.white('npm          ' + versions.npm));
    gutil.log(gutil.colors.white('webpack      ' + versions.webpack));
    gutil.log(gutil.colors.white('blender-gulp ' + versions.blenderGulp));
    gutil.log('');
    gutil.log(gutil.colors.black.bgCyan('Build tasks'));
    gutil.log(gutil.colors.green('gulp'), gutil.colors.yellow('[--production]'), ' compile [& minify] assets 📦');
    gutil.log(gutil.colors.green('gulp watch'), '          compile & watch for changes 👀');
    gutil.log(gutil.colors.dim('                      > your project will be served from `http://localhost:3000`'));
    gutil.log(gutil.colors.green('gulp webpack'), '        run the `webpack` command',
        gutil.colors.dim('> included in the default task'));
    gutil.log(gutil.colors.green('gulp svg'), '            minify svg files',
        gutil.colors.dim('> included in the default task'));
    gutil.log('');
    gutil.log(gutil.colors.black.bgCyan('Utilities'));
    gutil.log(gutil.colors.green('gulp favicon'), '        standalone utility for favicon generation 🌐');
    gutil.log('');
    gutil.log(gutil.colors.black.bgCyan('Linting'));
    gutil.log(gutil.colors.green('gulp lint:js'), '        lint your project\'s js files 🎀');
    gutil.log(gutil.colors.green('gulp lint:sass'), '      lint your project\'s sass files 🎀');
    gutil.log('');
    gutil.log(gutil.colors.cyan('!! Environment settings'));
    gutil.log(gutil.colors.cyan('!! Required: `APP_NAME` & `APP_URL`'));
    gutil.log('');
});
