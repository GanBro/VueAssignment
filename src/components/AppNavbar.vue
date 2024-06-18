<!--AppNavbar.vue-->
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img src="@/assets/九寨沟logo.png" alt="九寨沟Logo" class="navbar-logo">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/" @click="navigate('/')">首页</el-menu-item>
        <el-menu-item index="/about" @click="navigate('/about')">关于九寨</el-menu-item>
        <el-menu-item index="/landmarks" @click="navigate('/landmarks')">标志景点</el-menu-item>
        <el-menu-item index="/nature" @click="navigate('/nature')">自然与动物</el-menu-item>
        <el-menu-item index="/religionFolklore" @click="navigate('/religionFolklore')">宗教民俗</el-menu-item>
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
}

.navbar-container {
  padding-bottom: 0; /*让左右颜色分块沾满*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 10px;
  width: 100%;
}

.el-menu-demo {
  background-color: transparent;
  flex: 1;
}

.el-menu-item {
  color: #333;
  transition: all 0.3s ease;
  letter-spacing: 5px;
  font-family: 'Arial', sans-serif;
}

.el-menu-item:hover {
  color: #00a65a;
}
</style>
