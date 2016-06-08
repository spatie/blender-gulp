# Changelog

All Notable changes to `blender-gulp` will be documented in this file

### 2.1.5 - 2016-06-08
- Cleaned up babel dependencies

### 2.1.4 - 2016-05-31
- `use strict` in `lib`

### 2.1.3 - 2016-05-30
- Fixed dependencies

## 2.1.2 - 2016-05-30
- Failing version checks in `gulp help` no longer kill the process

## 2.1.1 - 2016-05-19
- Added versions of `npm` and `webpack` in `gulp help`

## 2.1.0 - 2016-05-19
- Added globbing for sass imports

## 2.0.7 - 2016-05-09
- Fixed: Defined `NODE_ENV` via webpack's `DefinePlugin` for production builds

## 2.0.6 - 2016-04-21
- Changed: Disable open graph generation in favicon task

## 2.0.5 - 2016-02-01
- Fixed: Added babel peerDependencies

## 2.0.4 - 2016-01-27
- Fixed: Enabled autoprefixing

## 2.0.3 - 2016-01-20
- Added: `noop` for images

## 2.0.2 - 2016-01-20
- Changed: Only hash files in production

## 2.0.1 - 2016-01-20
- Changed: Updated help

## 2.0.0 - 2016-01-20
- Rewrite using webpack as main asset bundler

## 1.1.7 - 2015-12-01
- Changed: Bumped elixir to v4

## 1.1.6 - 2015-11-27
- Fixed: Gulp watch won't break anymore when there are no css or js files

## 1.1.5 - 2015-11-27
- Fixed: Gulp won't break anymore when browserSync isn't set in the config

## 1.1.4 - 2015-11-26
- Changed: Removed og-image

## 1.1.3 - 2015-11-24
- Changed: Removed post install

## 1.1.2 - 2015-11-24
- Changed: Post-install typo

## 1.1.1 - 2015-11-24
- Changed: Post-install composer command

## 1.1.0 - 2015-11-24
- Added: cs fixers for js and php

## 1.0.11 - 2015-11-17
- Changed: `gulp watch` also watches .jsx files

## 1.0.10 - 2015-11-04
- Changed: `gulp lint:es` lints also back js

## 1.0.9 - 2015-11-04
- Fixed: js syntax
- Changed: `gulp help`

## 1.0.8 - 2015-11-04
- Added: `gulp lint` for front sass and js

## 1.0.7 - 2015-11-03
- Changed: Sass watch includes `node_modules/**/*.css`
- Added: eslint with `npm test`

## 1.0.6 - 2015-11-02
- Fixed: Hold on with ES6 notation

## 1.0.5 - 2015-10-22
- Changed: Moved dependencies from devDependencies (oops again)

## 1.0.4 - 2015-10-29
- Added: `gulp og-image` task

## 1.0.3 - 2015-10-29
- Changed: Favicon og:image tag generation off

## 1.0.2 - 2015-10-22
- Added: .jsx to Elixir browserify extension

## 1.0.1 - 2015-10-22
- Changed: Moved dependencies from devDependencies

## 1.0.0 - 2015-10-21
- Initial release
