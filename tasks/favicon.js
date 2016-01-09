'use strict';

const del = require('del');
const favicons = require('favicons');
const gulp = require('gulp');

const config = require('../config');

gulp.task('favicon', () => {

    del(config.favicons.view).then(() => {
        favicons({
            files: {
                src: config.favicons.src,
                dest: config.favicons.dest,
                html: config.favicons.view,
                iconsPath: '/',
                androidManifest: config.favicons.dest,
                browserConfig: config.favicons.dest,
                firefoxManifest: config.favicons.dest,
                yandexManifest: config.favicons.dest,
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
        });
    });
});
