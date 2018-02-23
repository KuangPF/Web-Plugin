<template>
  <div class="seamless-content">
    <div class="title">1.上下滚动:</div>
    <vueSeamless :data="listData" :class-option="optionStep1" class="seamless-warp1">
      <ul class="item">
        <li v-for="item in listData">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vueSeamless>
    <div class="title">2.上下滚动--每行停留:</div>
    <vueSeamless :data="listData" :class-option="optionStep2" class="seamless-warp1">
      <ul class="item">
        <li v-for="item in listData">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vueSeamless>
    <div class="title">3.向左滚动:</div>
    <vueSeamless :data="newsList" :class-option="optionLeft" class="seamless-warp2">
      <ul class="item">
        <li v-for="item in newsList" v-text="item.title"></li>
      </ul>
    </vueSeamless>
    <div class="title">4.向右滚动:</div>
    <vueSeamless :data="newsList" :class-option="optionRight" class="seamless-warp2">
      <ul class="item">
        <li v-for="item in newsList" v-text="item.title"></li>
      </ul>
    </vueSeamless>
  </div>

</template>
<script>
import vueSeamless from 'vue-seamless-scroll';
export default {
  data() {
    return {
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第二行无缝滚动第二行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第三行无缝滚动第三行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第四行无缝滚动第四行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第五行无缝滚动第五行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第六行无缝滚动第六行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第七行无缝滚动第七行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第八行无缝滚动第八行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第九行无缝滚动第九行',
        'date': '2017-12-16'
      }],
      newsList: [{
        'title': '1A simple, seamless scrolling for Vue.js.'
      }, {
        'title': '2A curated list of awesome things related to Vue.js.'
      }]
    };
  },
  components: {
    vueSeamless
  },
  computed: {
    optionStep1() {
      return {
        step: 1,
        direction: 1
      };
    },
    optionStep2() {
      return {
        step: 1,
        direction: 1,
        singleHeight: 30,
        waitTime: 1500
      };
    },
    optionLeft() {
      return {
        direction: 2,
        limitMoveNum: 2
      };
    },
    optionRight() {
      return {
        direction: 3,
        limitMoveNum: 2
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.seamless-content {
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  .seamless-warp1 {
    height: 229px;
    margin: 20px 0;
    text-align: center;
    overflow: hidden;
    .item {
      li {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .seamless-warp2 {
    margin-top: 20px;
    overflow: hidden;
    height: 25px;
    width: 100%;
    ul.item {
      width: 580px;
      li {
        display: inline;
        line-height: 25px;
        margin-right: 10px;
      }
    }
  }
}
</style>
