# blender-gulp

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Code Climate](https://img.shields.io/codeclimate/github/spatie-custom/blender-gulp.svg?style=flat-square)](https://img.shields.io/codeclimate/github/spatie-custom/blender-gulp.svg)

This is the gulp setup for [Blender CMS](https://github.com/spatie-custom/blender).

## Install
### Install gulp globally

``` bash
$ npm install --global gulp
```

### Install blender-gulp

This NPM package is custom built for [Spatie](https://spatie.be) projects and is therefore not registered on NPM.

We assume that you have [Composer](https://getcomposer.org) already installed for the php code style fixer.

We install it via a *custom npm* registry `npm.spatie.be`:
``` bash
$ npm i blender-gulp --save-dev
```

## Sample webpack.config.js

``` js
const webpack = require('webpack');

const config = require('blender-gulp/config/webpack');

config.entry = {
    'back.vendor': ['jquery'],
    'back.head': './js/back/head.js',
    'back.app': './js/back/app.js',
    'back.style': './sass/back/back.scss',
    'front.head': './js/front/head.js',
    'front.app': './js/front/app.js',
    'front.style': './sass/front/front.scss',
};

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'back.vendor',
    chunks: ['back.head', 'back.app', 'back.editor', 'back.chart'],
    filename: 'back.vendor.js',
}));

config.plugins.push(new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
}));

module.exports = config;
```

## Usage

Run `gulp help` to see options

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email willem@spatie.be instead of using the issue tracker.

## Credits

- [Willem Van Bockstal](https://github.com/willemvb)
- [All Contributors](../../contributors)

## About Spatie

Spatie is webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
