'use strict';

const gutil = require('gulp-util');

module.exports = function (error) {
    gutil.log(error);
    this.emit('change');
};

// Note: don't replace this with an arrow function since `this` has to be bound to context
