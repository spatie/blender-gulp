'use strict';

const childProcess = require('child_process');

module.exports = function spawn(command, options, callback) {
    spawn(command, options, { stdio: 'inherit', env: process.env })
        .on('close', code => code !== 1 ? callback() : null);
}
