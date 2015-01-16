# Static HTML generator

Just Copy the files or folders in `HEXO_BASE_DIR/static` folder directly into the `public` folder. This is useful when 
you dont't use hexo just as a blog, and you need some other pages to display your works which are some static html files. 

For example, you create a UI lib and then write a demo page which is placed in `HEXO_BASE_DIR/static/ui-demo.html`. And after using this generator, you can access this page with `http://YOUR_HEXO_DOMAIN/ui-demo.html` url in the browser.

## Install

``` bash
$ npm install hexo-generator-static --save
```
