<template>
  <div id="app">
    <Navbar />
    <el-container>
      <el-main style="padding: 0;">
        <router-view></router-view>
      </el-main>
    </el-container>
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

/*.el-container {
  height: 100%;
}

.el-main {
  padding-top: 60px; !* 确保主内容区域在导航栏下方 *!
  height: calc(100vh - 60px); !* 减去导航栏高度 *!
}*/
</style>
