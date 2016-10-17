module.exports = {
    context: 'default', // 'default'|'watch'|'production'
    svg: {
        src: 'resources/assets/svg',
        dest: 'public/images/svg',
    },
    lint: {
        sass: [
            'resources/assets/sass/front/**/*.scss',
            '!resources/assets/sass/front/utility/*.scss',
            '!resources/assets/sass/front/vendor-custom/*.scss',
        ],
        js: [
            'resources/assets/js',
        ],
    },
};
