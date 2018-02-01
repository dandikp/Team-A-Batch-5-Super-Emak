var gulp = require('gulp')
var config =  require('./gulpfile.config')
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var sass = require('gulp-ruby-sass')
var runSequence = require('run-sequence')

gulp.task('default', function (callback) {
  runSequence(['sass', 'build-html'], callback)
})

gulp.task('build-html', function () {
  return gulp.src('./index.tpl.html')
    .pipe(inject(gulp.src(config.dev.css.concat(config.dev.js), {
      read: false
    })))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
})

gulp.task('sass', function() {
  sass(config.dev.scss)
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/css/'))
})