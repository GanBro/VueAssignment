<template>
  <nav class="navbar">
    <div class="navbar-container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/" @click="navigate('/')">首页</el-menu-item>
        <el-menu-item index="/about" @click="navigate('/about')">关于九寨</el-menu-item>
        <el-menu-item index="/landmarks" @click="navigate('/landmarks')">标志景点</el-menu-item>
        <el-menu-item index="/nature" @click="navigate('/nature')">自然与动物</el-menu-item>
        <el-menu-item index="/research" @click="navigate('/research')">科研与保护</el-menu-item>
        <el-menu-item index="/culture" @click="navigate('/culture')">历史与文化</el-menu-item>
        <el-menu-item index="/festivals" @click="navigate('/festivals')">传统节庆</el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #545c64;
  color: white;
}
</style>
