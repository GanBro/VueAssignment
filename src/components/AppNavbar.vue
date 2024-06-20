<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]" :style="{ backgroundColor: navbarBackgroundColor }">
    <div class="navbar-container">
      <img src="@/assets/logo/九寨沟logo.png" alt="九寨沟Logo" class="navbar-logo">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item
            v-for="item in menuItems"
            :key="item.index"
            :index="item.index"
            @click="navigate(item.index, item.color)"
        >
          {{ item.label }}
        </el-menu-item>
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
      navbarBackgroundColor: 'rgb(25, 37, 75)', // 初始背景颜色
      menuItems: [
        { index: '/', label: '首页', color: '#0000' },
        { index: '/about', label: '关于九寨', color: 'rgb(26, 39, 76)' },
        { index: '/landmarks', label: '标志景点', color: 'rgb(26, 39, 76)' },
        { index: '/nature', label: '自然与动物', color: '#3357FF' },
        { index: '/religionFolklore', label: '宗教民俗', color: '#FF33A5' },
        { index: '/festivals', label: '传统节庆', color: '#A533FF' },
        { index: '/culture', label: '票务信息', color: '#33FFA5' },
      ],
    };
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
      const activeItem = this.menuItems.find(item => item.index === to.path);
      if (activeItem) {
        this.navbarBackgroundColor = activeItem.color;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const activeItem = this.menuItems.find(item => item.index === this.$route.path);
    if (activeItem) {
      this.navbarBackgroundColor = activeItem.color;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    navigate(path, color) {
      this.$router.push(path);
      this.navbarBackgroundColor = color;
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
  transition: background-color 0.3s, color 0.3s; /* 添加颜色过渡效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 确保没有阴影 */
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
}

.el-menu-demo {
  background-color: transparent;
  flex: 1;
  border-bottom: none !important; /* 确保没有边框 */
  box-shadow: none !important; /* 确保没有阴影 */
}

.el-menu-item {
  transition: background-color 0.3s, color 0.3s; /* 添加过渡效果 */
}

.el-menu-demo >>> .el-menu-item:hover {
  background-color: #000 !important; /* 设置悬停背景颜色 */
  color: coral !important; /* 设置悬停字体颜色 */
}
</style>
