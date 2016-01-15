'use strict';

const chalk = require('chalk');
const moment = require('moment');

module.exports = {
    
    plain(message) {
        console.log(message);
    },

    error(message) {
        console.log(chalk.red.message);
    },

    success(message) {
        console.log(chalk.green.message);
    },

    timestamp(message) {
        console.log(`[${moment().format('HH:mm:ss')}] ${message}`);
    },
};
