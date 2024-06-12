<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <!--        <h2>首页</h2>-->
      </el-header>
      <el-main>
        <div class="fullscreen-div">
          <img src="@/assets/首页01.png" alt="A Fullscreen Image">
        </div>
        <!-- 添加一个包含大字的div -->
        <div class="big-text1">
          春深似海
        </div>
        <div class="big-text2">
          纸条发芽，花开遍地，万物在春风中摇曳生长。
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.fullscreen-div {
  position: fixed; /* 或使用absolute，取决于你的具体需求 */
  top: 0;
  left: 0;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  z-index: -1; /* 根据需要调整，确保div不会遮挡页面上的其他元素 */
  overflow: hidden;
}

.fullscreen-div img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片覆盖整个div且不变形 */
}

.big-text1 {
  position: absolute; /* 使用绝对定位 */
  top: 30%; /* 垂直居中 */
  left: 10%; /* 水平偏左定位，可根据需要调整 */
  transform: translateY(-50%); /* 确保垂直居中 */
  font-size: 5rem; /* 设置大字字体大小，可根据需要调整 */
  color: white; /* 设置字体颜色，可根据需要调整 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 可选：添加文本阴影 */
  z-index: 1000; /* 确保文本在图片之上 */
}

.big-text2 {
  position: absolute; /* 使用绝对定位 */
  top: 43%; /* 垂直居中 */
  left: 11%; /* 水平偏左定位，可根据需要调整 */
  transform: translateY(-50%); /* 确保垂直居中 */
  font-size: 2rem; /* 设置大字字体大小，可根据需要调整 */
  color: white; /* 设置字体颜色，可根据需要调整 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 可选：添加文本阴影 */
  z-index: 1000; /* 确保文本在图片之上 */
}

</style>