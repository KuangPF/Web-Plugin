<template>
  <div class="lazy-load" v-title="'vue-lazyLoad'">
    <div class="header">图片懒加载 vue-lazyLoad</div>
    <div class="img-container">
      <div class="img-warp">
        <div class="img-item" v-for="(item ,idnex) in imgSrcList"><img v-lazy="item" width="100%" height="400"></div>
      </div>
      <div class="bg-img"v-lazy:background-image="imgSrcList[1]"></div>
    </div>
  </div>
</template>

<script>
import VueLazyload from 'vue-lazyload';
import Vue from 'vue';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/lazyLoad/404.svg',
  loading: './static/img/lazyLoad/loading.svg',
  attempt: 1
});
export default {
  data() {
    return {
      imgSrcList: [
        './static/img/lazyLoad/test1.jpg',
        './static/img/lazyLoad/test2.jpg',
        './static/img/lazyLoad/test3.jpg',
        './static/img/lazyLoad/test4.jpg',
        './static/img/lazyLoad/test5.jpg',
        './static/img/lazyLoad/test6.jpg',
        './static/img/lazyLoad/test7.jpg',
        './static/img/lazyLoad/test8.jpg',
        './static/img/lazyLoad/test9.jpg',
        './static/img/lazyLoad/test10.jpg',
        './static/img/lazyLoad/test11.jpg',
        './static/img/lazyLoad/test12.jpg',
        'http://covteam.u.qiniudn.com/test13.jpg',
        'http://covteam.u.qiniudn.com/test14.jpg',
        'http://covteam.u.qiniudn.com/test15.jpg',
        'http://covteam.u.qiniudn.com/test16.jpg',
        'http://covteam.u.qiniudn.com/test17.jpg',
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/404.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    };
  },
  mounted() {
  }
};
</script>

<style>
.bg-test {
  width: 100%;
  height: 100px;
}
</style>
