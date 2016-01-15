'use strict';

const exec = require('gulp-exec');
const log = require('./log');

module.exports = (command, callback) => {
    
    exec(command, (err, stdout, stderr) => {
        log.plain(stdout);
        log.error(stderr);
        callback();
    });
});

