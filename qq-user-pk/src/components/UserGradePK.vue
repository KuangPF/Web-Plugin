<template>
  <div class="index">
      <div class="head-content">
          <div class="user">
              <div class="avatar"></div>
              <div class="nickName" v-if="nickNameShow">多特蒙德</div>
              <div class="txtPK" :class="{txtPKX:isStart}">P</div>
              <div class="progress-bar"><div class="progress-value" :style="{width:progressValueUser}"></div></div>
          </div>
          <div class="me">
              <div class="avatar"></div>
              <div class="nickName" v-if="nickNameShow">广州恒大</div>
              <div class="txtPK" :class="{txtPKX:isStart}">K</div>
              <div class="progress-bar"><div class="progress-value" :style="{width:progressValueMe}"></div></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickNameShow: false,
      isStart: false,
      progressValueUser: 0,
      progressValueMe: 0
    };
  },
  mounted() {
    let _this = this;
    setTimeout(function() {
      _this.isStart = true;
    }, 0);
    setTimeout(function() {
      _this.progressValueUser = '50px';
      _this.progressValueMe = '60px';
    }, 0);
  }
};
</script>

<style>

</style>
