const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemap = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const cssFiles = [
    'src/css/font.css',
    'src/css/variable.css',
    'src/css/style.css',
    'src/css/client.css',
    'src/css/change.css',
    'src/css/assecc.css',
    'src/css/media.css'
]

function styles() {
    return gulp.src(cssFiles)
        .pipe(concat("style.css"))
        // .pipe(sourcemap.init())
        .pipe(cleanCSS())
        // .pipe(sourcemap.write())
        .pipe(gulp.dest('./build'))
}



gulp.task('styles', styles);
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    //Следим за стилями
    gulp.watch('./src/css/**/*.css', styles);
    // следим за изменениями html
    gulp.watch("./*.html").on('change', reload);
})
gulp.task('dev', gulp.series('styles', 'watch'));