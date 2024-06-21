<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
