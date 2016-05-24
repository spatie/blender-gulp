const pkg = require('../package.json');
const globalPath = require('global-modules');
const npmPkg = require(globalPath + "/npm/package.json");
const webpackPkg = require(globalPath + "/webpack/package.json");

module.exports = {
    npm: npmPkg.version,
    webpack: webpackPkg.version,
    blenderGulp: pkg.version
}
