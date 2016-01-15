'use strict';

const gulp = require('gulp');

const config = require('./config');

// Set the NODE_ENV to production for spawned processes
if (config.production) {
    process.env.NODE_ENV = 'production';
}

require('./tasks/default');
require('./tasks/favicon');
require('./tasks/revision');
require('./tasks/svg');
require('./tasks/webpack');
