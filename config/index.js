const _merge = require('lodash.merge');

let config = {
    watching: false,
    production: false,
    app: {
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
        name: 'Blender',
        'url': 'https://blender.spatie.be',
    },
    paths: {
        admin: '/blender',
        css: {
            src: 'resources/assets/css',
            dest: 'public/css',
            sassInclude: [config.paths.npm],
        },
        fonts: 'public/fonts',
        js: {
            resources: 'resources/assets/js',
            public: 'public/js',
        },
        npm: 'node_modules',
        svg: {
            src: 'resources/assets/svg',
            dest: 'public/images/svg',
        },
        favicons: {
            src: 'resources/assets/favicon/500x500.png',
            dest: 'public',
            view: 'resources/views/front/layout/_partials/favicons.blade.php',
        },
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
    webpack: null,
    extend(options) {
        config = _merge(config, options);
    }
};

module.exports = config;
