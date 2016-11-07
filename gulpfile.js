'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/**/*.css'
};

gulp.task('clean', ()=>{
  return gulp.src('./build/*', {read:false})
    .pipe(clean());
});

gulp.task('copy-html', ['clean'], ()=>{
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-css', ['clean'], ()=>{
  return gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-js', ['clean'], ()=>{
  return gulp.src(paths.js)
    .pipe(gulp.dest('./build'));
});



gulp.task('watch', ()=>{
  gulp.watch('./app/*', ['build']);
});

gulp.task('build', ['clean', 'copy-css', 'copy-html', 'copy-js']);

gulp.task('default', ['build']);
