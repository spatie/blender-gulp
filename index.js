'use strict';

const gulp = require('gulp');

const config = require('./config');

require('./tasks/favicon');
require('./tasks/revision');
require('./tasks/svg');
require('./tasks/webpack-dev-server');
require('./tasks/webpack');

require('./tasks/default');
require('./tasks/production');
require('./tasks/watch');
