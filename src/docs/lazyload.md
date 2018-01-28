## 图片懒加载
该插件实现是依赖于`vue-lazyload`，在这里简单介绍一下这个插件的用法，如果需要了解更多的依赖配置，可前往[vue-lazyload](https://github.com/hilongjw/vue-lazyload)查看
### 安装
#### npm
    npm install vue-lazyload -D
#### cdn
CDN: https://unpkg.com/vue-lazyload/vue-lazyload.js
```
<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>
<script>
  Vue.use(VueLazyload)
  ...
</script>
```
### Usage
`main.js`
```
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  el: 'body',
  components: {
    App
  }
})
```
### 参数配置
* preLoad: proportion of pre-loading height（预加载高度比例），默认1.3
* error: src of the image upon load fail（图片路径错误时加载图片），默认`data-src`
* loading: 	src of the image while loading（预加载图片），默认`data-src`
* attempt: 	attempts count（尝试加载图片数量）,默认3
* listenEvents: events that you want vue listen for（想要监听的vue事件）默认['scroll']可以省略，当插件跟页面中的动画或过渡等事件有冲突时,可以尝试其他选项
* [更多](https://github.com/hilongjw/vue-lazyload)...
### `vue`中使用
在`vue`文件中将懒加载的图片路径绑定`:src`修改为`v-lazy`,如果是背景图片添加`v-lazy:background-image`即可
```html
<img v-lazy="imgUrl" width="100%" height="400">
<div v-lazy:background-image="imgUrl"></div>
```
### CSS state
在图片加载时，可以自定义图片加载的样式，这里有三个状态
`laoding` `error` `loaded`
``` css
<style>
  img[lazy=loading] {
    /*your style here*/
  }
  img[lazy=error] {
    /*your style here*/
  }
  img[lazy=loaded] {
    /*your style here*/
  }
  /*
  or background-image
  */
  .yourclass[lazy=loading] {
    /*your style here*/
  }
  .yourclass[lazy=error] {
    /*your style here*/
  }
  .yourclass[lazy=loaded] {
    /*your style here*/
  }
</style>
```
### 友情链接
如果不是在`vue`中使用的话，可以使用[lazyImages](https://github.com/jawil/lazyImages),是基于ES6的轻量级，高性能，简便的图片懒加载 🐈
