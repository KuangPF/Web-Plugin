<template>
  <div class="index">
    <div class="header">
      <div class="vue-logo"><img src="../assets/logo.png"></div>
      <div class="title">Web Plugins</div>
    </div>
    <div class="wrapper" ref="wrapper">
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
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { getPluginItems } from '../api/aip';

export default {
  data() {
    return {
      pluginItems: ''
    };
  },
  mounted() {
    getPluginItems().then(res => {
      console.log(res);
      let pluginItems = res.data.data.pluginItems;
      this.pluginItems = pluginItems;
    });
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true // better-scroll 默认会阻止浏览器的原生 click 事件
      });
    });
  },
  methods: {
    viewDetail(pathUrl) {
      this.$router.push({ path: pathUrl, query: '' });
    }
  }
};
</script>
<style>

</style>
