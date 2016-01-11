'use strict';

const moment = require('moment');

module.exports = function(task) {
    return function() {
        this.plugin('watch-run', function(watching, callback) {
            console.log(`[${moment().format('HH:mm:ss')}] ${task}`);
            callback();
        })
    };
};
