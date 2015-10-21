var elixir = require('laravel-elixir');
var task = elixir.Task;

var del = require('del');
var favicons = require("favicons");
var gulp = require('gulp');
var gutil = require('gulp-util');
var svgmin = require('gulp-svgmin');


/* Configuration */

var settings = require("./settings.js");
var config = settings.config;


/* Elixir extensions */

elixir.extend("svg", function(source) {
    new task("svg", function() {
        return gulp.src( source )
            .pipe(svgmin())
            .pipe(gulp.dest(config.paths.svg.public));
    })
    .watch(config.paths.svg.resources + '*');
});


/* Extra gulp tasks */

// Show gulp help in terminal
gulp.task('help', function () {
    gutil.log('');
    gutil.log(gutil.colors.yellow('-------------------------------------'));
    gutil.log(gutil.colors.yellow('gulp'), '                     compile front assets');
    gutil.log(gutil.colors.yellow('gulp watch'), '               watch front assets and load browser-sync');
    gutil.log(gutil.colors.cyan(  '--production'), '             use flag to compile minified');
    gutil.log(gutil.colors.cyan(  '--back'), '                   use flag to compile or watch back module');
    gutil.log(gutil.colors.yellow('-------------------------------------'));
    gutil.log(gutil.colors.red(   'gulp favicon'), '             utility for favicon generation');
    gutil.log(gutil.colors.yellow('-------------------------------------'));
    gutil.log('');
});

/* Generate favicons and update html view */
gulp.task('favicon', function () {

    //cleanup blade include first
    del(config.paths.favicons.view);

    //generate icons
    favicons({
            files: {
                src: config.paths.favicons.resources,
                dest: config.paths.favicons.public,
                html: config.paths.favicons.view,
                iconsPath: '/',
                androidManifest: config.paths.favicons.public,
                browserConfig: config.paths.favicons.public,
                firefoxManifest: config.paths.favicons.public,
                yandexManifest: config.paths.favicons.public
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
                appName: config.app.name,
                appDescription: config.app.description,
                developer: config.app.developer,
                developerURL: config.app.developerUrl,
                version: 1.0,
                background: '#ffffff',
                index: '/',
                url: config.app.url,
                silhouette: false,
                logging: false
            }
    });
});


