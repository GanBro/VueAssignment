<!-- HomePage.vue -->
<template>
  <div class="page-container">
    <Navbar />
    <el-carousel :interval="5000" height="100vh" arrow="always" class="carousel-container">
      <el-carousel-item v-for="(item, index) in items" :key="index">
        <div class="fullscreen-div">
          <img :src="item.image" alt="Image" />
        </div>
        <!-- 添加一个包含大字的div -->
        <div class="text-container">
          <div class="big-text1">
            {{ item.title }}
          </div>
          <div class="big-text2">
            {{ item.subtitle }}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue';
import image1 from '@/assets/首页/春深似海.png';
import image2 from '@/assets/首页/一碧千里.png';
import image3 from '@/assets/首页/碧水微澜.png';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          image: image1,
          title: '春深似海',
          subtitle: '纸条发芽，花开遍地，万物在春风中摇曳生长。',
        },
        {
          image: image2,
          title: '一碧千里',
          subtitle: '绿意盎然的盛夏，谱写一场夏天的故事。',
        },
        {
          image: image3,
          title: '碧水微澜',
          subtitle: '湛蓝的水，青翠的树，山中画，画中意，犹如仙境。',
        },
      ],
    };
  },
};
</script>

<style>
.page-container {
  position: relative;
  width: 100vw;
  height: 200vh; /* 改为200vh以允许垂直滚动 */
  overflow-y: auto; /* 允许垂直滚动 */
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
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10%;
  padding-top:10%; /* 调整这个值来调高文字位置 */
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
