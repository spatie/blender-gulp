# Troubleshooting

blender-gulp doesn't follow semver because it's not an officially published package, so we're not afraid of making the occasional breaking change. Here's a list of common errors that require a quick upgrade step to get your installation back on track.

---

## Dealing with ESLint

If you've updated to a version that suddenly lints your JavaScript and dumps a massive error list, you have two options.

### a) The easy way out: Don't upgrade blender-gulp

You can lock the `blender-gulp` dependency to version 2.2.0, which doesn't include ESLint yet.

```
{
  "devDependencies": {
    "blender-gulp": "2.2.0"
  }
}
```

### b) Configure ESLint in your project

First you'll need to add an `.eslintrc` and `.eslintignore` file to the root of your project. Just grab them from the latest version of [Blender](https://github.com/spatie-custom/blender).

Next, you'll need to add some dependencies:

```
yarn add eslint eslint-config-spatie --dev
```

If you're project is using Vue or React, you might need to tweak the configuration and add some more dependencies. Check out eslint-config-spatie's [installation guide](https://github.com/spatie/eslint-config-spatie#installation) for details.

You can now most likely fix most of the errors with the `lint:js` task:

```
gulp lint:js
```

The remaining errors will need to be fixed manually.

---

## Dealing with `spawn node_modules/.bin/webpack ENOENT`

```
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: spawn node_modules/.bin/webpack ENOENT
    at exports._errnoException (util.js:1026:11)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:193:32)
    at onErrorNT (internal/child_process.js:359:16)
    at _combinedTickCallback (internal/process/next_tick.js:74:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Module.runMain (module.js:606:11)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:509:3
```

In version 2.5.2+, webpack needs to be added as a peerDependency of your project, and needs to be added through yarn or npm.

```
yarn add webpack@'^1.12' --dev
```
