<template>

  <nav class="navbar">
    <div class="navbar-container">
      <img src="@/assets/九寨沟logo.png" alt="九寨沟Logo" class="navbar-logo">
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff; /* 你可以选择一个你喜欢的颜色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加一些阴影，使导航栏看起来更加立体 */
}
.navbar-logo {
  height: 50px; /* 根据需要调整 Logo 图片的高度 */
  margin-right: 10px; /* 根据需要添加右边距，使 Logo 与菜单项之间有一定间距 */
  margin-left: 10px; /* 新增左边距，调整 Logo 位置 */
}

.navbar-container {
  display: flex;
  justify-content: space-between; /* 使菜单项均匀分布在导航栏中 */
  align-items: center;
  padding: 10px; /* 添加一些内边距 */
  width: 100%; /* 让导航栏内容充满一行 */
}

.el-menu-demo {
  background-color: transparent; /* 保持菜单背景透明，以显示导航栏的背景色 */
  flex: 1; /* 使菜单占据可用空间 */
}

/* 可选：调整菜单项的样式 */
.el-menu-item {
  color: #333; /* 菜单项文字颜色 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  letter-spacing: 5px; /* 调整字间距，可以根据需要调整具体数值 */
  font-family: 'Arial', sans-serif; /* 更改字体为 Arial，如果没有 Arial 字体，则使用 sans-serif 作为备选字体 */
}



.el-menu-item:hover {
  color: #00a65a; /* 鼠标悬停时的颜色，可根据你的主题颜色调整 */
}
</style>
