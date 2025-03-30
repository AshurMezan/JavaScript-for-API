const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: {
      baseDir: './',  // Корень — папка API
    },
    notify: false,
    port: 3000,
    open: true
  });

  // Следим за изменениями
  gulp.watch(['*.html', 'css/*.css', 'js/*.js']).on('change', browserSync.reload);
}

exports.default = serve;