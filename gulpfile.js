'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const browserify = require('gulp-browserify');
const mocha = require('gulp-mocha');
require('babel-register');

// Build Directories
const dirs = {
  src: 'src',
  test: 'test',
  dist: 'dist'
};

// File Sources
const sources = {
  main: `${dirs.src}/**/index.js`,
  tests: `${dirs.test}/**/*.js`
};

gulp.task('clean:dist', () => {
 return gulp.src(dirs.dist)
 .pipe(clean());
});

gulp.task('build', ['clean:dist'], () => {
  gulp.src(sources.main)
    .pipe(browserify({
          'transform': ['babelify']
      }))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('test', () => {
  return gulp.src(sources.tests, { read: false })
    .pipe(mocha());
});
