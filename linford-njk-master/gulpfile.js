var gulp = require('gulp');
var njk = require('gulp-nunjucks-render');
var destPath = 'public_html';
var srcPath = 'src/pages/*.njk';
var paths = [
  srcPath,
  'src/templates/layout.njk',
  'src/templates/components/*.njk'
];

function renderNJK() {
  console.log('(.njk -> .html) now in /' + destPath);
  return gulp.src(srcPath)
    .pipe(njk({path: 'src/templates'}))
    .pipe(gulp.dest(destPath));
}

gulp.task('watch', function() {
  console.log('watching "src" for changes...');
  gulp.watch(paths, renderNJK);
  return renderNJK();
})

gulp.task('default', renderNJK);