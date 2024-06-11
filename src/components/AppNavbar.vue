<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="navigate('/')">Home</el-menu-item>
    <el-menu-item index="2" @click="navigate('/site1')">Site 1</el-menu-item>
    <el-menu-item index="3" @click="navigate('/site2')">Site 2</el-menu-item>
    <el-menu-item index="4" @click="navigate('/site3')">Site 3</el-menu-item>
    <el-menu-item index="5" @click="navigate('/site4')">Site 4</el-menu-item>
    <el-menu-item index="6" @click="navigate('/site5')">Site 5</el-menu-item>
    <el-menu-item index="7" @click="navigate('/site6')">Site 6</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
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
