'use strict';

const _merge = require('lodash.merge');

let config = {
    app: {
        name: 'Blender',
        'url': 'https://blender.spatie.be',
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
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
    extend(options) {
        config = _merge(config, options);

        return config;
    }
};

module.exports = config;
