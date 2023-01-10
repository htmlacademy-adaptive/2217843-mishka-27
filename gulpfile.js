import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import csso from "postcss-csso";
import htmlmin from "gulp-html-minifier";
import rename from "gulp-rename";
import autoprefixer from "autoprefixer";
import browser from "browser-sync";
import del from "del";
import terser from "gulp-terser";
import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import squoosh from "gulp-libsquoosh";

// Styles

export const styles = () => {
  return gulp
    .src("source/sass/style.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }))
    .pipe(browser.stream());
};

// HTML

const html = () => {
  return gulp
    .src("source/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("build"));
};

// Scripts

const scripts = () => {
  return gulp
    .src("source/js/*.js")
    .pipe(terser())
    .pipe(
      rename(function (path) {
        path.extname = ".min.js";
      })
    )
    .pipe(gulp.dest("build/js"));
};

// Images

const optimizeImages = () => {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(squoosh())
    .pipe(gulp.dest("build/img"));
};

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg}").pipe(gulp.dest("build/img"));
};

// WebP

const createWebp = () => {
  return gulp
    .src(["source/img/**/*.{png,jpg}", "!source/img/favicon/*"])
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest("build/img"));
};

// SVG

const optimizeSVG = () => {
  return gulp
    .src(["source/img/icons/*.svg"])
    .pipe(svgmin())
    .pipe(gulp.dest("build/img/icons"));
};

const sprite = () => {
  return gulp
    .src("source/img/sprite/*.svg")
    .pipe(svgmin())
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"));
};

// Copy

const copy = (done) => {
  gulp
    .src(
      [
        "source/fonts/*.{woff2,woff}",
        "source/*.ico",
        "source/manifest.webmanifest",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
  done();
};

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Reload

const reload = (done) => {
  browser.reload();
  done();
};

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/script.js", gulp.series(scripts, reload));
  gulp.watch("source/*.html", gulp.series(html, reload));
};

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(styles, html, scripts, optimizeSVG, sprite, createWebp)
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(styles, html, scripts, optimizeSVG, sprite, createWebp),
  gulp.series(server, watcher)
);
