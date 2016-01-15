'use strict';

const chalk = require('chalk');
const moment = require('moment');

module.exports = {

    info(message) {
        console.log(chalk.green.message);
    },

    error(message) {
        console.log(chalk.red.message);
    },

    timestamp(message) {
        console.log(`[${moment().format('HH:mm:ss')}] ${message}`);
    },
};
