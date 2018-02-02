var gulp = require('gulp')
var config =  require('./gulpfile.config')
var devConfig = config.dev
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var sass = require('gulp-ruby-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var livereload = require('gulp-livereload')
var runSequence = require('run-sequence')

/**
 * DEV MODE
 */

gulp.task('dev', function(callback) {
  runSequence(['compile-scss', 'rename'], 'inject-css', 'inject-js', 'watch', callback)
})

gulp.task('compile-scss', function() {
  sass(devConfig.scss)
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./app/assets/css/'))
})

gulp.task('rename', function() {
  return gulp.src('./index.template.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
})

gulp.task('inject-css', ['compile-scss'], function() {
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(devConfig.css, {
      read: false
    })))
    .pipe(gulp.dest('.'))
    .pipe(livereload({ start: true }))
})

gulp.task('inject-js', function() {
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(devConfig.js, {
      read: false
    })))
    .pipe(gulp.dest('.'))
    .pipe(livereload({ start: true }))
})

gulp.task('watch-html', function() {
  return gulp.src('index.html')
    .pipe(livereload({ start: true }))
})

gulp.task('watch', function() {  
  gulp.watch('./app/**/*.scss', ['inject-css'])
  gulp.watch('./app/**/*.js', ['inject-js'])
  gulp.watch('./app/**/*.html', ['watch-html'])
})