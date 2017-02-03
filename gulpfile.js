const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const browserify = require('gulp-browserify');

gulp.task('styles', function () {
    const styles = gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version', '> 1%'))
        .pipe(minify())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    gulp.src(['src/js/git.js'])
        .pipe(browserify())
        .pipe(rename('scripts.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy:images', function () {
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('dist', ['styles', 'js', 'copy:images']);

gulp.task('default', ['styles', 'js', 'copy:images', 'watch']);
