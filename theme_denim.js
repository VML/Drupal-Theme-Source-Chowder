
var projectName = 'denim';
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
  },
  iconFont: {
    src: [srcDir + 'icons/**/*.svg'],
    scssTemplate: srcDir + 'styles/vendor/_icons-template.scss',
    scssFile: '../../../../../../source/' + srcDir + 'styles/vendor/_icons.scss',
    filePath: '/themes/custom/' + projectName + '/fonts/icons/',
    dest: destDir + 'fonts/icons'
  },
  fonts: {
    src: [srcDir + 'fonts/**/*.ttf', srcDir + 'fonts/**/*.woff', srcDir + 'fonts/**/*.woff2', srcDir + 'fonts/**/*.otf'],
    dest: destDir + 'fonts'
  }
};
