const pkg = require('../package.json');
const globalPath = require('global-modules');

let npmPkg;
let webpackPkg;

try {
    npmPkg = require(globalPath + '/npm/package.json');
} catch(e) {
    npmPkg = { version: 'Global NPM installation not found' };
}

try {
    webpackPkg = require(globalPath + '/webpack/package.json');
} catch(e) {
    webpackPkg = { version: 'Global webpack installation not found' };
}

module.exports = {
    npm: npmPkg.version,
    webpack: webpackPkg.version,
    blenderGulp: pkg.version,
};
