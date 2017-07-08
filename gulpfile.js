var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee']

gulp.task('coffee', function(){
  gulp.src(coffeeSources)
  // pipe file to coffe var...
    .pipe(coffee({bare: true})
      // in case of error
        .on('error', gutil.log))
      // will move new file to scripts folder
        .pipe(gulp.dest('components/scripts'))
});