'use strict';

const _merge = require('lodash.merge');
const gutil = require('gulp-util');

let config = {
    watch: false,
    production: gutil.env.production,
    app: {
        name: 'Blender',
        'url': 'https://blender.spatie.be',
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
    },
    css: {
        src: 'resources/assets/sass',
        dest: 'public/css',
        sassInclude: ['node_modules'],
    },
    js: {
        src: 'resources/assets/js',
        dest: 'public/js',
        webpack: null,
    },
    rev: {
        dest: 'public',
    },
    svg: {
        src: 'resources/assets/svg',
        dest: 'public/images/svg',
    },
    favicon: {
        src: 'resources/assets/favicon/500x500.png',
        dest: 'public',
        view: 'resources/views/front/layout/_partials/favicons.blade.php',
    },
    paths: {
        build: 'public/build',
        admin: '/blender',
        fonts: 'public/fonts',
        npm: 'node_modules',
    },
    browserSync: {
        files: [
            'public/build/*',
            'resources/views/**/*',
        ],
        proxy: 'http://localhost',
        reloadOnRestart: false,
        notify: false,
        open: false,
        xip: false,
    },
    extend(options) {
        config = _merge(config, options);

        return config;
    }
};

module.exports = config;
