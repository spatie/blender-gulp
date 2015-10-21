/* Blender-gulp base configuration */
module.exports = {
    disableNotifier : false,
    app  : {
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl : 'https://spatie.be',
        name: 'Blender'
    },
    paths : {
        admin: '/blender',
        browserSync : [
            'public/build/*',
            'resources/views/**/*'
        ],
        css : {
            public : 'public/css/'
        },
        favicons : {
            resources: 'resources/assets/favicon/500x500.png',
            public: 'public/',
            view: 'resources/views/front/layout/_partials/favicons.blade.php'
        },
        fonts: 'public/fonts/',
        js : {
            resources: 'resources/assets/js/',
            public: 'public/js/'
        },
        node : 'node_modules/',
        svg : {
            resources: 'resources/assets/svg/',
            public: 'public/images/svg/'
        }
    }
};
