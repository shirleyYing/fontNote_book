var gulp = require("gulp"),  
  deploy = require("gulp-gh-pages");

gulp.task('publish', function () {  
  gulp.src("./_book/\*\*/\*.\*")
    .pipe(deploy({
      remoteUrl: "git@github.com:shirleyYing/fontNote_book.git"
    }))
    .on("error", function(err){
      console.log(err);
    });
});