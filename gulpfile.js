var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', function(){
  return gulp.src('./src/scss/**/*.scss')
          .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('./assets/css'))
})

gulp.task('scss', function(){
  return gulp.src('./src/scss/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./assets/css'))
})

gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['scss'])
})