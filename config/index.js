module.exports = {
    context: 'default', // 'default'|'watch'|'production'
    app: {
        name: process.env.APP_NAME,
        url: process.env.APP_URL,
        description: process.env.APP_NAME,
        developer: 'spatie.be',
        developerUrl: 'https://spatie.be',
    },
    svg: {
        src: 'resources/assets/svg',
        dest: 'public/images/svg',
    },
    lint: {
        js: ['resources/assets/js/**/*.js'],
        sass: [
            'resources/assets/sass/front/**/*.scss',
            '!resources/assets/sass/front/utility/*.scss',
            '!resources/assets/sass/front/vendor-custom/*.scss',
        ],
    },
};
