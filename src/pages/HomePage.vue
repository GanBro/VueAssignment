<!-- HomePage.vue -->
<template>
  <div class="page-container">
    <Navbar />
    <el-carousel :interval="5000" height="100vh" arrow="always" class="carousel-container">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <div class="fullscreen-div">
          <img :src="image" alt="Image" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 添加一个包含大字的div -->
    <div class="text-container">
      <div class="big-text1">
        春深似海
      </div>
      <div class="big-text2">
        纸条发芽，花开遍地，万物在春风中摇曳生长。
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue';
import image1 from '@/assets/首页01.png';
import image2 from '@/assets/首页01.png';
import image3 from '@/assets/首页01.png';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      images: [
        image1,
        image2,
        image3,
      ],
    };
  },
};
</script>

<style>
.page-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-div {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  pointer-events: none; /* 确保文字不会影响用户交互 */
}

.big-text1 {
  font-size: 5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.big-text2 {
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  margin-top: 1rem;
}
</style>
