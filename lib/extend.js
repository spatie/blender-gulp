const gulp = require('gulp')
const config = require('./config')
const del = require('del')
const elixir = require('laravel-elixir')
const eslint = require('gulp-eslint')
const favicons = require('favicons')
const gutil = require('gulp-util')
const Pageres = require('pageres')
const pjson = require('../package.json')
const sassLint = require('gulp-sass-lint')
const shell = require('gulp-shell')
const svgmin = require('gulp-svgmin')
const Task = elixir.Task

elixir.extend('svg', function(source) {
    new Task('svg', function() {
        return gulp.src(source)
            .pipe(svgmin())
            .pipe(gulp.dest(config.paths.svg.public))
    })
        .watch(config.paths.svg.resources + '*')
})

gulp.task('lint', ['lint:sass', 'lint:js'], function() {
    gutil.log(gutil.colors.green('lint finished'))
})

gulp.task('lint:js', function() {
    return gulp.src(['resources/assets/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
})

gulp.task('lint:sass', function() {
    gulp.src(['resources/assets/sass/front/**/*.scss', '!resources/assets/sass/front/utility/*.scss', '!resources/assets/sass/front/vendor-custom/*.scss'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})

gulp.task('help', function() {
    gutil.log('')
    gutil.log(gutil.colors.white('blender-gulp ' + pjson.version))
    gutil.log('')
    gutil.log(gutil.colors.white('Build tasks --------------'))
    gutil.log(gutil.colors.yellow('gulp'), '                     compile front assets')
    gutil.log(gutil.colors.yellow('gulp watch'), '               watch front assets and load browser-sync')
    gutil.log(gutil.colors.cyan('--production'), '             use flag to compile minified')
    gutil.log(gutil.colors.cyan('--back'), '                   use flag to compile or watch back module')
    gutil.log('')
    gutil.log(gutil.colors.white('Utilities ----------------'))
    gutil.log(gutil.colors.yellow('gulp lint'), '                run all lint tests')
    gutil.log(gutil.colors.yellow('gulp lint:js'), '             run lint tests for js')
    gutil.log(gutil.colors.yellow('gulp lint:sass'), '           run lint tests for Sass')
    gutil.log(gutil.colors.yellow('gulp favicon'), '             standalone utility for favicon generation')
    gutil.log(gutil.colors.yellow('gulp og-image'), '            generate screenshot og-image from GULP_BROWSERSYNC_PROXY in .env')
    gutil.log(gutil.colors.yellow('gulp fix-cs'), '              Fix code style both for php and js')
    gutil.log(gutil.colors.yellow('gulp fix-cs:js'), '           Fix code style both for js')
    gutil.log(gutil.colors.yellow('gulp fix-cs:php'), '          Fix code style both for php')
    gutil.log('')
})

/// Generate og-image
gulp.task('og-image', function() {
    new Pageres({
        delay: 1,
        filename: 'og-image',
    })
        .src(config.browserSync.proxy, ['1600x800'], {crop: true})
        .dest('public/images')
        .run()
        .then(function() {
            gutil.log(gutil.colors.red('og:image saved'))
        })
})

/// Generate favicons and update header view
gulp.task('favicon', function() {

    // Cleanup blade include first
    del(config.paths.favicons.view)

    // Generate icons
    favicons({
        files: {
            src: config.paths.favicons.resources,
            dest: config.paths.favicons.public,
            html: config.paths.favicons.view,
            iconsPath: '/',
            androidManifest: config.paths.favicons.public,
            browserConfig: config.paths.favicons.public,
            firefoxManifest: config.paths.favicons.public,
            yandexManifest: config.paths.favicons.public,
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
            yandex: false,
        },
        config: {
            appName: config.app.name,
            appDescription: config.app.description,
            developer: config.app.developer,
            developerURL: config.app.developerUrl,
            version: 1.0,
            background: '#ffffff',
            index: '/',
            url: config.options.url,
            silhouette: false,
            logging: false,
        },
    })
})

gulp.task('fix-cs:js',  shell.task(config.paths.cs.js.map(path => `jscs ${path} --fix` )))

gulp.task('fix-cs:php', shell.task(config.paths.cs.php.map(path => `./vendor/bin/php-cs-fixer fix ${path}`)))

gulp.task('fix-cs', ['fix-cs:js', 'fix-cs:php'])
