'use strict';

const gulp = require('gulp');

const config = require('./config');

if (config.production) {
    process.env.NODE_ENV = 'production';
}

require('./tasks/default');
require('./tasks/favicon');
require('./tasks/svg');
require('./tasks/webpack');
