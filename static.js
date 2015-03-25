var path = require('path');
var fs = require('fs');
var File = require('file');

module.exports = function(locals, render, callback) {
  var config = hexo.config;
  var base_dir = hexo.base_dir;
  var route = hexo.route;

  var source_dir = path.join(base_dir, 'static');

  route.set('static.html', fs.readFileSync(path.join(base_dir, 'package.json'), 'utf8'));
  
  File.walkSync(source_dir, function(dir_path, dirs, files) {
    files.forEach(function(file) {
      if (file[0] === '.') return;

      var filepath = path.join(dir_path, file);
      route.set(filepath, fs.readFileSync(filepath));
    });
  });

  callback();
};
