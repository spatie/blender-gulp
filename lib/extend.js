// Modules
var elixir = require('laravel-elixir');
var task = elixir.Task;

var del = require('del');
var favicons = require("favicons");
var gulp = require('gulp');
var gutil = require('gulp-util');
var svgmin = require('gulp-svgmin');


// Configuration
var blenderGulp = require("./config");

// Elixir extensions
elixir.extend("svg", function(source) {
    new task("svg", function() {
        return gulp.src( source )
            .pipe(svgmin())
            .pipe(gulp.dest(blenderGulp.paths.svg.public));
    })
    .watch(blenderGulp.paths.svg.resources + '*');
});


// Extra gulp tasks
// Show gulp help in terminal
gulp.task('help', function () {
    gutil.log('');
    gutil.log(gutil.colors.yellow('-------------------------------------------------------------------------------'));
    gutil.log(gutil.colors.yellow('gulp'), '                     compile front assets');
    gutil.log(gutil.colors.yellow('gulp watch'), '               watch front assets and load browser-sync');
    gutil.log(gutil.colors.cyan(  '--production'), '             use flag to compile minified');
    gutil.log(gutil.colors.cyan(  '--back'), '                   use flag to compile or watch back module');
    gutil.log(gutil.colors.yellow('-------------------------------------------------------------------------------'));
    gutil.log(gutil.colors.red(   'gulp favicon'), '             standalone utility for favicon generation');
    gutil.log(gutil.colors.yellow('-------------------------------------------------------------------------------'));
    gutil.log('');
});

// Generate favicons and update header view
gulp.task('favicon', function () {

    // Cleanup blade include first
    del(blenderGulp.paths.favicons.view);

    // Generate icons
    favicons({
            files: {
                src: blenderGulp.paths.favicons.resources,
                dest: blenderGulp.paths.favicons.public,
                html: blenderGulp.paths.favicons.view,
                iconsPath: '/',
                androidManifest: blenderGulp.paths.favicons.public,
                browserConfig: blenderGulp.paths.favicons.public,
                firefoxManifest: blenderGulp.paths.favicons.public,
                yandexManifest: blenderGulp.paths.favicons.public
            },
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: true,
                windows: true,
                yandex: false
            },
            config: {
                appName: blenderGulp.app.name,
                appDescription: blenderGulp.app.description,
                developer: blenderGulp.app.developer,
                developerURL: blenderGulp.app.developerUrl,
                version: 1.0,
                background: '#ffffff',
                index: '/',
                url: blenderGulp.options.url,
                silhouette: false,
                logging: false
            }
    });
});


