'use strict';

const del = require('del');
const favicon = require('favicons');
const gulp = require('gulp');

const config = require('../config');

gulp.task('favicon', () => {

    del(config.favicon.view).then(() => {
        favicon({
            files: {
                src: config.favicon.src,
                dest: config.favicon.dest,
                html: config.favicon.view,
                iconsPath: '/',
                androidManifest: config.favicon.dest,
                browserConfig: config.favicon.dest,
                firefoxManifest: config.favicon.dest,
                yandexManifest: config.favicon.dest,
            },
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicon: true,
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
