<template>
  <div class="index">
      <div class="head-content">
          <div class="user">
              <div class="avatar"></div>
              <div class="nickName">多特蒙德</div>
              <div class="txtPK" :class="{txtPKX:isStart}">P</div>
          </div>
          <div class="me">
              <div class="avatar"></div>
              <div class="nickName">广州恒大</div>
              <div class="txtPK" :class="{txtPKX:isStart}">K</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isStart:false,
        }
    },
    mounted () {
        let _this = this;
        setTimeout(function() {
            _this.isStart = true;
        },0)
    }
};
</script>

<style>

</style>
