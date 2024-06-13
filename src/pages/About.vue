<template>
  <div class="about-page">
    <div class="about-container">
      <div class="left-pane">
        <!-- 左侧内容 -->
        <p>dsfasdf</p>
      </div>
      <div class="right-pane">
        <!-- 右侧内容 -->
        <p>右侧内容</p>
      </div>
    </div>
    <div class="center-card1">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-page {
  position: relative; /* 确保子元素可以使用绝对定位 */
  display: flex; /* 允许子元素使用flex布局 */
  flex-direction: column; /* 使内容垂直排列 */
  height: 100vh; /* 页面高度占满整个视窗 */
  margin-top: 60px; /* 确保内容不会被导航栏覆盖 */
}

.about-container {
  display: flex; /* 水平排列左侧和右侧面板 */
  flex: 1; /* 使其占满剩余空间 */
}

.left-pane, .right-pane {
  flex: 1; /* 左右面板各占一半 */
  height: 2200px; /*左右面板高度*/
  display: flex; /* 允许子元素使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.left-pane {
  background-color: rgb(126, 202, 186); /* 左侧面板背景色 */
}

.right-pane {
  background-color: rgb(226, 252, 203); /* 右侧面板背景色 */
}

.center-card1 {
  position: absolute; /* 使用绝对定位 */
  top: 20px; /* 固定的顶部位置，200px */
  left: 300px; /* 固定的左侧位置，300px */
  z-index: 10; /* 确保卡片在最上层 */
}

.box-card {
  width: 1100px; /* 卡片宽度 */
  height: 700px; /* 卡片高度 */
  overflow: auto; /* 当内容超过卡片大小时显示滚动条 */
}
</style>
