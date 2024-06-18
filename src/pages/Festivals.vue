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

    <div v-for="(card, index) in cards" :key="index" class="card-container" :style="{ top: `${630 + index * 750}px` }">
      <el-card class="box-card">
        <div class="card-header">
          <span>传统节庆</span>
        </div>
        <div class="card-body">
          <p class="card-text" v-for="(text, i) in card.texts" :key="i">{{ text }}</p>
          <el-row class="card-images" gutter="10">
            <el-col :span="12">
              <el-image :src="card.image1" class="card-image"></el-image>
            </el-col>
            <el-col :span="12">
              <el-image :src="card.image2" class="card-image"></el-image>
            </el-col>
          </el-row>
        </div>
      </el-card>
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
      ],
      cards: [
        {
          texts: [
            '藏文化，向来博大精深，源远流长。五百年前，九寨沟的先民们从遥远的“世界第三级”－－西藏阿里迁徙至此，世世代代，繁衍生息，与周围的羌族、回族、汉族共同携手，创造了独特的康巴文化。',
            '至今，九寨沟人的衣食往行、婚丧嫁娶和生产方式等，还保持着浓郁而古朴的藏族传统。九寨沟当地居民大多都是藏羌的少数民族，他们坐拥如此美丽的景色，但是依旧保持着属于它们的那份质朴，拥有对生命的敬畏和对生活的热爱，是个简单淳朴的民族，也让九寨沟这个上天垂爱的净地多了许多人文的温暖和厚度。',
            '虽然九寨沟先民迁徙于西藏，但是，九寨沟的民风民俗又不完全同于西藏，由于这里正处于从藏区到汉区，从牧区到农区的过渡地带，因此具有厚重的边缘文化色彩。让我们一起走进九寨的传统节庆，走进这个令人着迷的九寨世界……'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(1).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(2).jpg'
        },
        // 其他四个卡片的内容可以在此继续定义
        {
          texts: [
            '第二个卡片的内容段落1。',
            '第二个卡片的内容段落2。',
            '第二个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(3).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(4).jpg'
        },
        {
          texts: [
            '第三个卡片的内容段落1。',
            '第三个卡片的内容段落2。',
            '第三个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(5).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(6).jpg'
        },
        {
          texts: [
            '第四个卡片的内容段落1。',
            '第四个卡片的内容段落2。',
            '第四个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(7).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(8).jpg'
        },
        {
          texts: [
            '第五个卡片的内容段落1。',
            '第五个卡片的内容段落2。',
            '第五个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(9).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(10).jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 5000px; /* 增加高度以适应多个卡片 */
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

.card-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 70%; /* 调整卡片的宽度 */
}

.carousel-image {
  width: 100%;
  height: auto; /* 调整图片高度以匹配走马灯 */
  object-fit: cover;
}

.card-header {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 36px;
  color: #775587;
  background-color: rgba(0, 0, 0, 0);
  line-height: 54px;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  text-decoration: none solid rgb(119, 85, 135);
  text-align: center;
  text-indent: 0px;
  margin-bottom: 10px;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-text {
  font-family: 'domine', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 14.4px;
  color: #656a7b;
  background-color: rgba(0, 0, 0, 0);
  line-height: 21.6px;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  text-decoration: none solid rgb(101, 106, 123);
  text-align: left;
  text-indent: 2em; /* 首行缩进 */
  margin-bottom: 20px;
}

.card-images {
  width: 100%;
}

.card-image {
  width: 100%; /* 调整图片宽度 */
  height: auto;
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

.box-card {
  margin-top: 20px;
  padding: 20px;
}
</style>
