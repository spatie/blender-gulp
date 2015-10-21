var blenderGulp = require("./lib/config");

blenderGulp.init =  function () {
    var blenderGulp = this;

    // Modules & their configuration */
    var elixir = require('laravel-elixir');
    var gutil = require('gulp-util');
    require("./lib/extend");

    // Settings
    elixir.config.sourcemaps = false;
    if (blenderGulp.disableNotifier) process.env.DISABLE_NOTIFIER = true;
    process.env.module = (gutil.env.back == 1) ? 'back' : 'front';
    process.env.dev = blenderGulp.options.dev + ( (gutil.env.back == 1)? blenderGulp.paths.admin : '' );

    // Elixir mix
    elixir(function (mix) {

        // NPM -> Javascript
        blenderGulp.options.files[process.env.module].js.map(function (item) {
            mix.browserify(process.env.module + '/' + item, blenderGulp.paths.js.public + process.env.module + '.' + item);
        })

        mix
            // SVG optimization
            .svg(blenderGulp.paths.svg.resources + '*')

            // Sass -> CSS
            .sass(blenderGulp.options.files[process.env.module].sass, blenderGulp.paths.css.public + process.env.module + '.css', {includePaths: [blenderGulp.paths.node]})

            // Version CSS & Javascript
            .version([blenderGulp.paths.css.public, blenderGulp.paths.js.public])

            // BrowserSync
            .browserSync({
                files: blenderGulp.paths.browserSync,
                proxy: process.env.dev,
                reloadOnRestart: false,
                notify: false,
                open: false,
                xip: true
            });
    });
};

module.exports = blenderGulp;