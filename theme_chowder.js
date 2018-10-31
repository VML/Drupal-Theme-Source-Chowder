
var projectName = 'chowder';
var srcDir = 'themes/' + projectName + '/';
var destDir = '../docroot/themes/custom/' + projectName + '/';

module.exports = {
  sass: {
    src: [srcDir + 'styles/**/*.scss'],
    lintSrc: [srcDir + 'styles/**/*'],
    dest: destDir + 'css'
  },
  javascript: {
    src: [srcDir + 'scripts/**/*.js'],
    dest: destDir + 'js'
  },
  images: {
    src: [srcDir + 'images/**/*.png', srcDir + 'images/**/*.jpg', srcDir + 'images/**/*.jpeg', srcDir + 'images/**/*.gif'],
    dest: destDir + 'img'
  }
};
