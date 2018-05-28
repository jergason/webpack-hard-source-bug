# Hard Source Webpack Plugin Issue

This repo reproduces an issue with the [Hard Source](https://github.com/mzgoddard/hard-source-webpack-plugin/issues/286) plugin.

## How To Reproduce
* Run `npm install`
* Run `npm run build` twice

## What I Saw
This first build (when there isn't a valid cache) works. The second build fails with an error:

```bash
ERROR in ./durp.pug
Module not found: Error: Can't resolve 'node_modules/pug-loader/index.js' in '/Users/j0d019y/code/webpack-hard-thingy-bug'
 @ ./durp.pug 1:10-152
 @ ./index.js
```

If you remove the Hard Source plugin from the webpack.config.js file the build completes successfully every time.
