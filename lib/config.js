/* Blender-gulp base configuration */
module.exports = {
    disableNotifier: false,
    app: {
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
        name: 'Blender',
    },
    paths: {
        admin: '/blender',
        css: {
            public: 'public/css/',
        },
        favicons: {
            resources: 'resources/assets/favicon/500x500.png',
            public: 'public/',
            view: 'resources/views/front/layout/_partials/favicons.blade.php',
        },
        fonts: 'public/fonts/',
        js: {
            resources: 'resources/assets/js/',
            public: 'public/js/',
        },
        npm: 'node_modules/',
        svg: {
            resources: 'resources/assets/svg/',
            public: 'public/images/svg/',
        },
        cs: {
            php: ['app'],
            js: ['resources/assets/js'],
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
}
