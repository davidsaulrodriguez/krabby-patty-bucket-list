/* Required dependencies... Don't touch! */
const del = require('del');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const {
  task,
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp');
const gls = require('gulp-live-server');
/* Required dependencies... Don't touch! */

// TODO: Write the logic to make the magic happen!