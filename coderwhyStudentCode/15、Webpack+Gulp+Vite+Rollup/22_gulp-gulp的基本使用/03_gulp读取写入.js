const { src, dest, watch } = require("gulp");
const babel = require("gulp-babel");

const copyFile = () => {
  // 1.读取文件
  // 2.写入文件
  return src("./src/**/*.js").pipe(dest("./dist"));
};

// const taxk = function () {
//   return src("./src/*.js")
//     .pipe(babel({ preset: ["babel/preset-env"] }))
//     .pipe(terser({ mangle: { toplevel: true } }))
//     .pipe(dest("output/"));
// };

// watch("./src/*.js", task);

module.exports = {
  copyFile,
};
