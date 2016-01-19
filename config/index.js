'use strict';

const gutil = require('gulp-util');

module.exports = {
    context: 'default', // default|watch|hot|production 
    app: {
        name: 'Blender',
        'url': 'https://blender.spatie.be',
        description: 'Blender CMS',
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
    },
    svg: {
        src: 'resources/assets/svg',
        dest: 'public/images/svg',
    },
    favicons: {
        src: 'resources/assets/favicon/500x500.png',
        dest: 'public',
        view: 'resources/views/front/layout/_partials/favicons.blade.php',
    },
};
