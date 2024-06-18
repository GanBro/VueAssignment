<template>
  <div class="festivals-page">
    <div class="festivals-container">
      <div class="left-pane">
        <!-- 左侧内容 -->
      </div>
      <div class="right-pane">
        <!-- 右侧内容 -->
      </div>
    </div>
    <div class="carousel-container">
      <el-carousel class="carousel" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.festivals-page {
  position: relative; /* 确保子元素可以使用绝对定位 */
  display: flex; /* 允许子元素使用flex布局 */
  flex-direction: column; /* 使内容垂直排列 */
  height: 100vh; /* 页面高度占满整个视窗 */
}

.carousel-container {
  position: absolute; /* 绝对定位 */
  top: 0; /* 距离顶部0 */
  left: 0; /* 距离左侧0 */
  width: 100%; /* 宽度占满 */
  height: 300px; /* 走马灯高度 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  z-index: 2; /* 确保走马灯在上面 */
}

.carousel {
  width: 80%; /* 走马灯宽度 */
  height: 100%; /* 走马灯高度 */
}

.festivals-container {
  display: flex; /* 水平排列左侧和右侧面板 */
  width: 100%; /* 宽度占满 */
  height: 1000px; /* 高度和走马灯一致 */
  position: absolute; /* 绝对定位 */
  top: 0; /* 距离顶部0 */
  z-index: 1; /* 确保左右面板在走马灯下面 */
}

.left-pane, .right-pane {
  flex: 1; /* 左右面板各占一半 */
  display: flex; /* 允许子元素使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.left-pane {
  background-color: rgb(243, 193, 59); /* 左侧面板背景色 */
}

.right-pane {
  background-color: rgb(254, 244, 216); /* 右侧面板背景色 */
}

.el-carousel__item h3 {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  color: #475669;
  opacity: 0.75;
  height: 100%; /* 高度占满父元素 */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
