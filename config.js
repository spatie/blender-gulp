// Gulp settings
module.exports = {
    disableNotifier : false,

    app  : {
        name: 'Blender',
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl : 'https://spatie.be'
    },

    paths : {
        node : 'node_modules/',
        fonts: 'public/fonts/',
        css : {
            public : 'public/css/'
        },
        favicons : {
            resources: 'resources/assets/favicon/500x500.png',
            public: 'public/',
            view: 'resources/views/front/layout/_partials/favicons.blade.php'
        },
        svg : {
            resources: 'resources/assets/svg/',
            public: 'public/images/svg/'
        },
        js : {
            resources: 'resources/assets/js/',
            public: 'public/js/'
        }
    }
};
