/* Require npm modules */

var gutil = require('gulp-util');
var config = require("./config");
// Disable notifications
if (config.disableNotifier) process.env.DISABLE_NOTIFIER = true;


function initGulp() {

    /* Custom extensions */
    var elixir = require('laravel-elixir');
    elixir.config.sourcemaps = false;
    var extensions = require("extend.js");

    var config = this.config;

    // Proccess settings
    process.env.module = (gutil.env.back == 1) ? 'back' : 'front';
    process.env.dev = (gutil.env.back == 1) ? config.app.dev + '/blender' : config.app.dev;

    /* Elixir main function */
    elixir(function (mix) {

        /* NPM -> Javascript */

        config.files[process.env.module].js.map(function (item) {
            mix.browserify(process.env.module + '/' + item, config.paths.js.public + process.env.module + '.' + item);
        })


        mix
            /* Asset generation */
            // Optimize svgs in resource folder
            .svg(config.paths.svg.resources + '*')

            /* Sass -> CSS */
            // Compile sass to resources/css. Extra includePaths for @imports eg. from vendor/node_modules
            .sass(files[process.env.module].sass, config.paths.css.public + process.env.module + '.css', {includePaths: [config.paths.node]})

            /* Version CSS & Javascript */
            // Versioning public css & js
            .version([config.paths.css.public, config.paths.js.public])


            /* BrowserSync */
            // Reload changes in css, js or views when you run gulp watch
            .browserSync({
                files: [
                    'public/build/*',
                    'resources/views/**/*'
                ],
                proxy: process.env.dev,
                reloadOnRestart: false,
                notify: false,
                open: false,
                xip: true
            });
        ;


    });
}

module.exports = {
    config : config,
    init : initGulp
};