// Modules
var elixir = require('laravel-elixir')
var task = elixir.Task

var del = require('del')
var favicons = require('favicons')
var gulp = require('gulp')
var gutil = require('gulp-util')
var svgmin = require('gulp-svgmin')
var sassLint = require('gulp-sass-lint')
var eslint = require('gulp-eslint')

// Configuration
var blenderGulp = require('./config')

// Elixir extensions
elixir.extend('svg', function(source) {
    new task('svg', function() {
        return gulp.src( source )
            .pipe(svgmin())
            .pipe(gulp.dest(blenderGulp.paths.svg.public))
    })
        .watch(blenderGulp.paths.svg.resources + '*')
})


// Extra gulp tasks
/// Lint front sass & js
gulp.task('lint', ['lint:sass', 'lint:es'], function () {
    gutil.log(gutil.colors.green('lint finished'))
})

gulp.task('lint:es', function () {
    return gulp.src(['resources/assets/js/front/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
})

gulp.task('lint:sass', function () {
    gulp.src(['resources/assets/sass/front/**/*.scss', '!resources/assets/sass/front/utility/*.scss', '!resources/assets/sass/front/vendor-custom/*.scss']) //exclude vendor stuff
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})

/// Show gulp help in terminal
gulp.task('help', function () {

    var pjson = require('../package.json');

    gutil.log('')
    gutil.log(gutil.colors.white( 'blender-gulp ' + pjson.version))
    gutil.log('')
    gutil.log(gutil.colors.white( 'Build tasks --------------'))
    gutil.log(gutil.colors.yellow('gulp'), '                     compile front assets')
    gutil.log(gutil.colors.yellow('gulp watch'), '               watch front assets and load browser-sync')
    gutil.log(gutil.colors.cyan(  '--production'), '             use flag to compile minified')
    gutil.log(gutil.colors.cyan(  '--back'), '                   use flag to compile or watch back module')
    gutil.log('')
    gutil.log(gutil.colors.white( 'Utilities ----------------'))
    gutil.log(gutil.colors.yellow('gulp lint'), '                run lint tests')
    gutil.log(gutil.colors.yellow('gulp favicon'), '             standalone utility for favicon generation')
    gutil.log(gutil.colors.yellow('gulp og-image'), '            generate screenshot og-image from GULP_BROWSERSYNC_PROXY in .env')
    gutil.log('')
})


/// Generate og-image
gulp.task('og-image', function () {
    var Pageres = require('pageres')
    new Pageres({
        delay: 1,
        filename: 'og-image'
    })
        .src( blenderGulp.browserSync.proxy , ['1600x800'], {crop: true})
        .dest('public/images')
        .run()
        .then(function() {
            gutil.log(gutil.colors.red('og:image saved'))
        })
})

/// Generate favicons and update header view
gulp.task('favicon', function () {

    // Cleanup blade include first
    del(blenderGulp.paths.favicons.view)

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
    })
})