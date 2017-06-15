'use strict';

import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import nodeResolve from 'rollup-plugin-node-resolve';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import assets from 'postcss-assets';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
  entry: 'src/entry.js',
  format: 'cjs',
  dest: 'public/js/bundle.js',
  sourceMap: true,
  plugins: [
    includePaths({
      paths: ['src']
    }),
    nodeResolve({
      main: true,
      jsnext: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    postcss({
      extensions: [ '.css' ],
      sourceMap: true, // true, "inline" or false
      extract : 'public/css/styles.css',
      plugins: [
        cssnext(),
        assets(),
        cssnano({ preset: 'default' })
      ]
    }),
    buble(),
    uglify({}, minify)
  ].concat(
    // uglify({}, minify), // Minify bundle
    filesize() // Show filesize of bundle
  )
}
