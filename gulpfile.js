const gulp = require("gulp");
// Зависимости Gulp будут здесь
const babel = require("gulp-babel");

gulp.task("default", function () {
  // Задачи Gulp будут здесь
  // Исходный код для Node
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
  // исходный код для браузера
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
