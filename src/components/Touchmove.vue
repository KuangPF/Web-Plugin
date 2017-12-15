<template>
  <div class="touchmove-container">
      <div class="main-content" @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'>
          <div class="menu" @click="menuShow"></div>
          <div class="title">监听左滑与右滑</div>
      </div>
      <div class="left-content" :class="{'left-content-show':isLeftShow}"></div>
      <div class="right-content" :class="{'right-content-show':isRightShow}"></div>
      <div class="mask" v-if="isMaskShow" @click="maskClick" @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLeftShow: false,
      isRightShow: false,
      isMaskShow: false,
      touchPoint: {}
    };
  },
  methods: {
    maskClick() {
      this.isLeftShow = false;
      this.isRightShow = false;
      this.isMaskShow = false;
    },
    touchstart(e) {
      let pointX = e.targetTouches[0].clientX;
      this.touchPoint.startX = pointX;
    },
    touchmove(e) {
      let point = e.targetTouches[0];
      this.touchPoint.stopX = point.clientX;
    },
    touchend(e) {
      let slideDist = this.touchPoint.stopX - this.touchPoint.startX;
      //右边滑动
      console.log(slideDist);
      if (slideDist > 20 && !this.isLeftShow) {
        if (!this.isRightShow) {
          if (!this.isLeftShow) this.isLeftShow = true;
        }
        this.isRightShow = false;
        this.isMaskShow = true;
      } else if (slideDist < -20) {
        if (!this.isLeftShow) {
          if (!this.isRightShow) this.isRightShow = true;
          if (this.isLeftShow) this.isLeftShow = false;
        } else {
          this.isLeftShow = false;
        }
      }
      if (this.isLeftShow || this.isRightShow) {
        this.isMaskShow = true;
      } else {
        this.isMaskShow = false;
      }
      this.touchPoint = {};
    },
    menuShow() {
      this.isLeftShow = true;
      this.isMaskShow = true;
    }
  }
};
</script>

<style>

</style>
