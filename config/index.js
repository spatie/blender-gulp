'use strict';

const gutil = require('gulp-util');

module.exports = {
    production: gutil.env.production || false,
    watch: gutil.env.watch || false,
    verbose: gutil.env.verbose || false,
    app: {
        name: 'Blender',
        'url': 'https://blender.spatie.be',
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
    },
    rev: {
        base: 'public',
        files: ['js/**/*', 'css/**/*']
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
    webpack: null,
};
