<template>
  <el-row class="container">
    <el-col :span="12" class="left"></el-col>
    <el-col :span="12" class="right"></el-col>

    <div class="carousel-container">
      <el-carousel height="530px" motion-blur>
        <el-carousel-item v-for="item in images" :key="item.id">
          <img :src="item.src" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Festivals',
  data() {
    return {
      images: [
        { id: 1, src: 'src/assets/传统节庆/奇妙蓝水.png' },
        { id: 2, src: 'src/assets/传统节庆/日桑文化节.png' },
        { id: 3, src: 'src/assets/传统节庆/藏经.png' },
        { id: 4, src: 'src/assets/传统节庆/转经筒.png' },
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 2000px; /* 手动设置容器高度 */
  position: relative;
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

.carousel-container {
  position: absolute;
  top: 100px; /* 调整走马灯的位置 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%; /* 调整走马灯的宽度 */
}

.carousel-image {
  width: 100%;
  height: auto; /* 调整图片高度以匹配走马灯 */
  object-fit: cover;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
