const gulp = require("gulp");
// Зависимости Gulp будут здесь
const babel = require("gulp-babel");
const eslint=require('gulp-eslint');

gulp.task("default", function (done) {
  // Задачи Gulp будут здесь
  // Запуск ESLint
  gulp.src(["es6/**/*.js","public/es6/**/*.js"]).pipe(eslint()).pipe(eslint.format());
  // Исходный код для Node
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
  // исходный код для браузера
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
  done();
});
