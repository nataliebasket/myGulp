import gulp from "gulp"

const {src, dest, series} = gulp;

export function html()  {
    console.log("Hello!!");
    .pipe(dest("./public"))
   
}

// export function clear () {
//     return del("./public");
//   }

export default series (
// clear,
// parallel(
    // styles,
    html,
    // copyImg,
    // copyOther
// ),
// series (
    // server,
    // watcher
// )
);
