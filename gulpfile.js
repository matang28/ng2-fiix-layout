//Import the gulp libs:
var gulp = require("gulp");
var run = require("gulp-run");
var clean = require('gulp-clean');

/**
 * A clean task - remove the dist folder.
 */
gulp.task("clean", function (cb) {
    gulp.src('dist/*', {read: false}).pipe(clean(cb));
    cb();
});

/**
 * A transpile task - use typescript transpiler to convert the typescript files to javascript. (using the tsconfig file).
 */
gulp.task("transpile",['clean'], function (cb) {
    run('ngc').exec(cb);
});

/**
 * A build task - cleans, transpiles and copy the css styles to the dist folder.
 */
gulp.task("build", ['transpile'],function (cb) {
    gulp.src('./src/styles/*')
        .pipe(gulp.dest('./dist/src/styles'));
    cb();
});

/**
 * The default task is "build".
 */
gulp.task("default", ['build']);