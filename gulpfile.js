/**
 * There is 2 mode, dev and build
 * 
 * Mode 1: dev, workflow is as follow:
 * 1. Start livereload server.
 * 2. Watch for change in js files.
 * 3. Watch for change in scss files, process them into css files, process with autoprefixer.
 * 3. Inject css, and js files to index.html.
 * 
 * Mode 2: build, workflow is as follow:
 * 1. Concatenate js files into 1 js file(main.js).
 * 2. Rename js file(main.js).
 * 2. Uglify js file(main.js).
 * 3. Move js file(main.js).
 * 4. Minify image files.
 * 5. Move html template files to dist/components/component_name/component_name.template.html.
 */

/* Import dependencies */
var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css')
var inject = require('gulp-inject')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')

/* Dev Mode */
/* Watch changes */
gulp.task('watch', function() {
  // 1. Watch js files, then inject to index.html
  gulp.watch('src/js/*.js', ['inject:js'])
  // 2. Watch scss, compile to css, add auto-prefixer, then inject to index.html
  gulp.watch('src/css/main.scss', ['inject:css'])

  gulp.watch('index.html', function() {
    return gulp.src('index.html')
      .pipe(livereload({ start: true }))
  })
})

gulp.task('inject:js', function() {
  var target = gulp.src('index.html')

  var sources = gulp.src([
    'src/js/*.js'
  ])

  return target
    .pipe(inject(sources))
    .pipe(gulp.dest(''))
    .pipe(livereload({ start: true }))
})

gulp.task('compile:scss', function() {
  var target = gulp.src('src/css/*.scss')

  return target
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('src/css'))
})


gulp.task('inject:css', ['compile:scss'], function() {
  var target = gulp.src('index.html')

  var sources = gulp.src([
    'src/css/*.css'
  ])

  return target
    .pipe(inject(sources))
    .pipe(gulp.dest(''))
    .pipe(livereload({ start: true }))
})

gulp.task('dev', [
  'inject:js',
  'inject:css',
  'watch'
])


/**
 *  This is Build Task
 * 
 */

gulp.task('minify:js', function() {
  return gulp.src([
    'src/js/*.js'
  ])
    .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify().on('error', function(err) {
        console.log(err)
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/src/js'))
})

gulp.task('minify:css', function() {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(concat('main.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({ compability: 'ie8' }))
    .pipe(gulp.dest('dist/src/css'))
})

gulp.task('minify:img', function() {
  return gulp.src('src/img/*')
  .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
  .pipe(gulp.dest('dist/src/img'))
})


gulp.task('build', [
  'minify:js',
  'minify:css',
  'minify:img'
])