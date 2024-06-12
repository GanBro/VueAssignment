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

</style>