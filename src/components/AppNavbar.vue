<!--AppNavbar.vue-->
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
      navbarBackgroundColor: '',
      menuItems: [
        { index: '/', label: '首页', color: '#0000' },
        { index: '/about', label: '关于九寨', color: 'rgb(26, 39, 76)' },
        { index: '/landmarks', label: '标志景点', color: 'rgb(26, 39, 76)' },
        { index: '/nature', label: '自然与动物', color: 'rgb(26, 39, 76)' },
        { index: '/religionFolklore', label: '宗教民俗', color: 'rgb(26, 39, 76)' },
        { index: '/festivals', label: '传统节庆', color: 'rgb(26, 39, 76)' },
        { index: '/culture', label: '票务信息', color: 'rgb(26, 39, 76)' },
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
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400&display=swap');

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  width: 150px;
  height: 44px;
  margin-right: 10px;
  margin-left: 10px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
}

.el-menu-demo {
  background-color: transparent;
  flex: 1;
  border-bottom: none !important;
  box-shadow: none !important;
}

.el-menu-demo >>> .el-menu-item {
  font-family: 'Muli', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 18px;
  color: #ffffff !important; /* 确保字体颜色为白色 */
  background-color: rgba(0, 0, 0, 0);
  line-height: 18px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: left;
  text-indent: 0px;
  transition: background-color 0.3s, color 0.3s;
}

.el-menu-demo >>> .el-menu-item.is-active {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #ffffff !important; /* 确保字体颜色为白色 */
}

.el-menu-demo >>> .el-menu-item:hover {
  font-family: 'Muli', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 18px;
  color: #666666 !important;
  background-color: #ffffff !important;
  line-height: 18px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(102, 102, 102);
  text-align: left;
  text-indent: 0px;
}
</style>
