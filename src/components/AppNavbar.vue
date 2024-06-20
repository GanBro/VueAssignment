<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="navbar-container">
      <img src="@/assets/logo/九寨沟logo.png" alt="九寨沟Logo" class="navbar-logo">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/" @click="navigate('/')">首页</el-menu-item>
        <el-menu-item index="/about" @click="navigate('/about')">关于九寨</el-menu-item>
        <el-menu-item index="/landmarks" @click="navigate('/landmarks')">标志景点</el-menu-item>
        <el-menu-item index="/nature" @click="navigate('/nature')">自然与动物</el-menu-item>
        <el-menu-item index="/religionFolklore" @click="navigate('/religionFolklore')">宗教民俗</el-menu-item>
        <el-menu-item index="/festivals" @click="navigate('/festivals')">传统节庆</el-menu-item>
        <el-menu-item index="/culture" @click="navigate('/culture')">票务信息</el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      isScrolled: false,
    };
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: rgb(25, 37, 75); /* 初始背景颜色 */
  transition: background-color 0.3s, color 0.3s; /* 添加颜色过渡效果 */
  /* 注释掉或移除 box-shadow */
  border-bottom: none; /* 确保没有边框 */
  box-shadow: none; /* 确保没有阴影 */
}

.navbar.scrolled {
  background-color: #ffffff; /* 滚动后的背景颜色 */
}

.navbar-logo {
  width: 150px; /* 设置宽度 */
  height: 44px; /* 设置高度 */
  margin-right: 10px;
  margin-left: 10px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* 添加一些内边距 */
  width: 100%;
  border-bottom: none; /* 确保没有边框 */
}

.el-menu-demo {
  background-color: transparent;
  flex: 1;
  border-bottom: none; /* 确保没有边框 */
}

.el-menu-item {
  color: #fff; /* 初始字体颜色 */
  transition: color 0.3s ease;
  letter-spacing: 5px;
  font-family: 'Arial', sans-serif;
}

.navbar.scrolled .el-menu-item {
  color: #333; /* 滚动后的字体颜色 */
}

.el-menu-item:hover {
  color: #00a65a;
}

.el-menu {
  border-bottom: none !important; /* 强制移除边框 */
  box-shadow: none !important; /* 强制移除阴影 */
}
</style>
