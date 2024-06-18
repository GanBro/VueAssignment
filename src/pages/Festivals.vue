<template>
  <el-row class="container">
    <el-col :span="12" class="left">
    </el-col>
    <el-col :span="12" class="right">
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Festivals'
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 2000px; /* 手动设置容器高度 */
}

.left {
  background-color: rgb(243, 193, 59);
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}

.right {
  background-color: rgb(254, 244, 216);
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}

.content {
  padding: 20px;
}
</style>
