import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import del from "del";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import importScss from "postcss-import";
import postScss from "postcss-scss";

const {src, dest, watch, series, parallel} = gulp;

export function html()  {
    return src("./source/*.html")
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest("./public"))
}

export function copyImg () {
    return src("./source/img/**/*.{png,jpg}")
    .pipe(dest("public/img"))
  }


export function styles () {
  return src("./source/scss/*.scss", { sourcemaps: true})
    .pipe(plumber())
    .pipe(postcss([importScss()], { syntax: postScss }))
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./public/styles", { sourcemaps: true}))
    .pipe(browserSync.stream());
}

//Сервер
export function server (done) {
    browserSync.init({
      server: {
          baseDir: "./public"
      },
      notify: false,
      ui: false
    });
    done();
  }

function reloadServer (done) {
browserSync.reload();
done();
}

function watcher () {
    watch("./source/scss/blocks/*.scss", series(styles));
    watch("./source/**/*.html", series(html, reloadServer));
  }

export function clear () {
    return del("./public");
  }

export default series (
  clear,
  parallel(
    styles,
    html,
    copyImg,
  ),
  series (
    server,
    watcher
    )
);
