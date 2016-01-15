'use strict';

const gulp = require('gulp');

const config = require('./config');

require('./tasks/default');
require('./tasks/favicon');
require('./tasks/revision');
require('./tasks/svg');
require('./tasks/webpack');
