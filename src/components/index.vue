<template>
  <div class="index">
      <div class="header">
          <div class="title">Web Plugins</div>
      </div>
      <div class="main-content">
          <div class="content-item" v-for="(item,index) in pluginItems" :style="{backgroundColor:item.BGColor}" @click="viewDetail(item.pathUrl)">
              <div class="content-left">
                  <div class="top">
                      <div class="plugin-title">{{item.title}}</div>
                      <div class="update">{{item.updateTime}}</div>
                  </div>
                  <div class="bottom">
                      <div class="plugin-desc">{{item.desc}}</div>
                 </div>
              </div>
              <div class="content-right">
                  <div class="plugin-demo-img">
                      <img :src="item.imgSrc">
                  </div>
              </div>
          </div>
      </div>
      <div class="coypright"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pluginItems: [
        {
          title: "左滑删除",
          desc: "移动端左滑删除,利用touchstart(),touchmove(),touchend()方法实现.",
          imgSrc: "../../static/index/slide-delete.gif",
          BGColor: "#DBDAD9",
          pathUrl: "/slide-delete",
          updateTime:"2017.12.10"
        },
        {
          title: "photoswipe",
          desc: "实现图片点击预览,该版本为vue-photoswipe,依赖photoswipe.",
          imgSrc: "../../static/index/photoswipe.gif",
          BGColor: "#DBDAD9",
          pathUrl: "/photoswipe",
          updateTime:"2017.12.13"
        },
        {
          title: "touch-event",
          desc: "利用移动端触摸事件监听左右滑动,适用于移动端菜单的显示",
          imgSrc: "../../static/index/touchmove.gif",
          BGColor: "#DBDAD9",
          pathUrl: "/touchmove",
          updateTime:"2017.12.14"
        }
      ]
    };
  },
  methods: {
    viewDetail(pathUrl) {
      console.log(pathUrl);
      this.$router.push({ path: pathUrl, query: "" });
    }
  }
};
</script>
<style>

</style>
