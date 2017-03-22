var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', function(){
  return gulp.src('./src/sass/**/*.scss')
          .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('./dist/css'))
})

gulp.task('sass', function(){
  return gulp.src('./src/sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', function(){
  gulp.watch('./src/sass/**/*.sass', ['sass'])
})