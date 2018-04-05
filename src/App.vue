<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view" />
    </transition>
  </div>
</template>
<script>
import './sass/style.scss';
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    };
  },
  watch: {
    '$route'(to, from) {
      const toMeta = to.meta;
      const fromMeta = from.meta;
      this.transitionName = toMeta < fromMeta ? 'slide-right' : 'slide-left';
    }
  }
};
</script>
<style>
#app {
  width: 100%;
}
.view {
  width: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
</style>
