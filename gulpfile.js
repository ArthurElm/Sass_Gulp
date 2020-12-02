const { src, dest, symlink, parallel, watch } = require('gulp');
const del = require('del');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Browser Sync
function browser(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("*.html").on('change', browserSync.reload);
}

// Sass (scss -> css)
function sass(){
  return src('./sass/*.scss')
  .pipe(gulpsass())
  .pipe(dest('./css/'))
  .pipe(browserSync.strem());
}


// Watch Sass
function watcher(){
  watch('./sass/*.scss', sass)
}

// Src + Dest
function srcExemple() {
    return src('./index.html')
        .pipe(dest('dossier1/'))
}

// Clean
function clean() {
    return del('dossier1');
}

// LinkExemple
function linkExemple() {
    return src('./test.html')
        .pipe(symlink('dossier1'));
}

// Parallel
// function css(log) {
//     console.log('Tâche 1, exemple de compilation')
//     log();
// }

// function sass(log) {
//     console.log('Tâche 2, exemple de minification')
//     log();
// }

function sass() {
    return src('./sass/*.scss')
        .pipe(gulpSass())
        .pipe(dest('./css/'))
}

module.exports = {
    srcExemple,
    clean,
    linkExemple,
    sass,
    watcher
    // build: parallel(css, sass)
    // build: parallel(browser, watcher)
}