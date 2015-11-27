'use strict';

const blenderGulp = require('./lib/config');

blenderGulp.init =  function() {
    // Modules
    const elixir = require('laravel-elixir');
    const gutil = require('gulp-util');
    require('./lib/extend');

    // Settings
    elixir.config.sourcemaps = false;
    elixir.config.js.browserify.options.extensions = ['.jsx'];

    process.env.DISABLE_NOTIFIER = blenderGulp.disableNotifier;
    process.env.module = (gutil.env.back == 1) ? 'back' : 'front';

    // Map Browsersync custom options to the configuration
    Object.keys(blenderGulp.options.browserSync || {}).forEach(function(key) {
        blenderGulp.browserSync[key] = blenderGulp.options.browserSync[key];
    });

    // Sync front or back?
    blenderGulp.browserSync.proxy = blenderGulp.browserSync.proxy + ((gutil.env.back == 1) ? blenderGulp.paths.admin : '');

    // Elixir mix
    elixir(function(mix) {

        // NPM -> Javascript
        blenderGulp.options.files[process.env.module].js.forEach(function(item) {
            mix.browserify(process.env.module + '/' + item, blenderGulp.paths.js.public + process.env.module + '.' + item);
        });

        mix

            // SVG optimization
            .svg(blenderGulp.paths.svg.resources + '*')

            // Sass -> CSS
            .sass(blenderGulp.options.files[process.env.module].sass, blenderGulp.paths.css.public + process.env.module + '.css', {includePaths: [blenderGulp.paths.npm]})

            // Version CSS & Javascript
            .version([blenderGulp.paths.css.public, blenderGulp.paths.js.public])

            // BrowserSync
            .browserSync(blenderGulp.browserSync);
    });

    // Add change watchers for node_modules
    (function() {

        if (var sass = elixir.Task.find('sass')) {
            sass.watch(blenderGulp.paths.npm + '**/*.css')
        } else {
            elixir.Log.message('Not registering extra sass watchers because the task isn\'t available')
        }

        if (var browserify = elixir.Task.find('browserify')) {
            elixir.Task.find('browserify').watch(blenderGulp.paths.js.resources + '**/*.jsx')
        } else {
            elixir.Log.message('Not registering extra browserify watchers because the task isn\'t available')
        }

    })()

};

module.exports = blenderGulp;
