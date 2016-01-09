const del = require('del');
const favicons = require('favicons');
const gulp = require('gulp');

const config = require('../config');

gulp.task('favicon', () => {

    del(config.paths.favicons.view);

    favicons({
        files: {
            src: config.paths.favicons.src,
            dest: config.paths.favicons.dest,
            html: config.paths.favicons.view,
            iconsPath: '/',
            androidManifest: config.paths.favicons.dest,
            browserConfig: config.paths.favicons.dest,
            firefoxManifest: config.paths.favicons.dest,
            yandexManifest: config.paths.favicons.dest,
        },
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            windows: true,
            yandex: false,
        },
        config: {
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
        },
    })
})
