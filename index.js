var generator = hexo.extend.generator;

if (generator.register.length === 1){
  generator.register(require('./static'));
} else {
  generator.register('static', require('./static'));
}