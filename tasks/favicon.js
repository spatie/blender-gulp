const favicons = require('gulp-favicons');
const gulp = require('gulp');

const config = require('../config');

gulp.task('favicon', () => {

    return gulp.src(config.favicon.src)
        .pipe(favicons({
            html: config.favicon.view,
            iconsPath: '/',
            appName: config.app.name,
            appDescription: config.app.description,
            developer: config.app.developer,
            developerURL: config.app.developerUrl,
            version: 1.0,
            background: '#ffffff',
            index: '/',
            url: config.app.url,
            silhouette: false,
            logging: false,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                windows: true,
                yandex: false,
            },
        }))
        .pipe(gulp.dest(config.favicon.dest));
});
