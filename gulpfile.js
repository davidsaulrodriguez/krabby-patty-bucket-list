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

/* Where the production ready build should go */
const jsDist = './public/assets/js';
const styleDist = './public/assets/css';
const imgsDist = './public/assets/imgs';

// Tasks that get things done!

task('scss-dist', function() {
  console.log("\t\tCompiling your Sass files...");
  console.log("\t\tMinifying your Sass files...");
  console.log("\t\tCreating your CSS '.map' files...");
  return src(['node_modules/bootstrap/scss/bootstrap.scss',
  'src/css/**',
  'src/scss/**',
  'src/scss/!*.scss',
  '!src/scss/*.html'])
  .pipe(sourcemap.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    Browserslist: ['last 4 versions'],
    cascade: false
  }))
  .pipe(rename({
    dirname: '',
    suffix: '.min',
    extname: '.css'
  }))
  .pipe(sourcemap.write('./sourcemaps'))
  .pipe(dest(styleDist));
});

task('js-dist', function(){
  console.log("\t\tMinifying your JavaScript files...");
  console.log("\t\tCreating your JavaScript '.map' files...");
  return src(['node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/jquery/dist/jquery.js',
  'node_modules/popper.js/dist/umd/popper.js',
  'src/js/**.js'])
  .pipe(sourcemap.init())
  .pipe(minify({
    noSource: true,
    preserveComments: 'some',
    ext: {
      src: '.js',
      min: '.min.js',
    },
    ignoreFiles: ['**.min.js']
  }))
  .pipe(sourcemap.write('./sourcemaps'))
  .pipe(dest(jsDist));
});

task('imgs-dist', function(){
  console.log("\t\tMoving your images files...");
  return src(['src/imgs/**.jpeg',
  'src/imgs/**.png',
  'src/imgs/**.svg',
  'src/imgs/**.gif',
  'src/imgs/**.jpg'])
  .pipe(dest(imgsDist));
});

task('compile', parallel('scss-dist', 'js-dist', 'imgs-dist'));

task('serve', function() {
  let server = gls.new(['app.js']);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  watch(['*'], function (file) {
    server.notify.apply(server, [file]);
  });

  // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn`
  watch('app.js', function() {
    server.start.bind(server)()
  });
});

task('cleanUp', function (){
  console.log("\t\tCleaning up and removing the 'public/' directory.");
  return del([
    './public/'
  ]);
});

task('clean', series('cleanUp'));
task('build', series('compile'));
task('start', series('serve'));