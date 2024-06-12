<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/" @click="navigate('/')">首页</el-menu-item>
    <el-menu-item index="/sites" @click="navigate('/sites')">景点列表</el-menu-item>
    <el-menu-item index="/history" @click="navigate('/history')">历史介绍</el-menu-item>
    <el-menu-item index="/events" @click="navigate('/events')">活动资讯</el-menu-item>
    <el-menu-item index="/guides" @click="navigate('/guides')">旅游攻略</el-menu-item>
    <el-menu-item index="/community" @click="navigate('/community')">游客互动</el-menu-item>
    <el-menu-item index="/about" @click="navigate('/about')">关于我们/联系我们</el-menu-item>
  </el-menu>
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
