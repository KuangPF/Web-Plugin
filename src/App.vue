<template>
  <div id="app">
      <transition>
        <router-view/>
      </transition>
  </div>
</template>
<script>
import "./sass/style.scss";
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style>

</style>
