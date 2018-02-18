
var gulp = require('gulp')
var config =  require('./gulpfile.config')
var devConfig = config.dev
var buildConfig = config.build
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var sass = require('gulp-ruby-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var runSequence = require('run-sequence')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var debug = require('gulp-debug')


/** DEV MODE */

gulp.task('dev', function(callback) {
  runSequence(['compile-scss', 'rename'], 'inject-css', 'inject-js', 'watch', callback)
})

gulp.task('compile-scss', function() {
  sass(devConfig.scss)
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./src/assets/css/'))
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
})

gulp.task('inject-js', function() {
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(devConfig.js, {
      read: false
    })))
    .pipe(gulp.dest('.'))
})

gulp.task('watch-html', function() {
  return gulp.src('./index.html')
})

gulp.task('watch', function() {  
  gulp.watch('./src/**/*.scss', ['inject-css'])
  gulp.watch('./src/**/*.js', ['inject-js'])
  gulp.watch('./src/**/*.html', ['watch-html'])
})

/** BUILD MODE */

gulp.task('build', function(callback) {
  runSequence('compile-scss', 'minify-js', 'minify-img', 'handle-fontawesome', 'minify-css', 'handle-views', 'build-index', callback)
})

gulp.task('minify-js', function() {
  return gulp.src(devConfig.js)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify().on('error', function (err) {
      console.log(err)
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/src/js'))
})

gulp.task('minify-css', function () {
  return gulp.src(devConfig.css)
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(concat('main.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({ compability: 'ie8' }))
    .pipe(gulp.dest('./dist/src/assets/css/production/main'))
})

gulp.task('minify-img', function () {
  return gulp.src(devConfig.img)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./dist/src/assets/img'))
})

gulp.task('handle-fontawesome', function() {
  return gulp.src(devConfig.fonts)
    .pipe(gulp.dest('./dist/src/assets/css/production/fonts'))
})

gulp.task('handle-views', function () {
  return gulp.src(devConfig.views)
    .pipe(gulp.dest('./dist/src'))
})

gulp.task('build-index', function() {
  return gulp.src('./build.template.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'))
})