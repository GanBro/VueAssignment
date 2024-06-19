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
          <span>{{ card.title }}</span>
        </div>
        <div class="card-body">
          <p class="card-text" v-for="(text, i) in card.texts" :key="i">{{ text }}</p>
          <el-row class="card-images" gutter="10">
            <el-col :span="12" v-if="card.image1 && !card.image3">
              <el-image :src="card.image1" class="card-image"></el-image>
            </el-col>
            <el-col :span="12" v-if="card.image2 && !card.image3">
              <el-image :src="card.image2" class="card-image"></el-image>
            </el-col>
            <el-col :span="8" v-if="card.image1 && card.image3">
              <el-image :src="card.image1" class="card-image"></el-image>
            </el-col>
            <el-col :span="8" v-if="card.image2 && card.image3">
              <el-image :src="card.image2" class="card-image"></el-image>
            </el-col>
            <el-col :span="8" v-if="card.image3">
              <el-image :src="card.image3" class="card-image"></el-image>
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
          title: '传统节庆',
          texts: [
            '藏文化，向来博大精深，源远流长。五百年前，九寨沟的先民们从遥远的“世界第三级”－－西藏阿里迁徙至此，世世代代，繁衍生息，与周围的羌族、回族、汉族共同携手，创造了独特的康巴文化。',
            '至今，九寨沟人的衣食往行、婚丧嫁娶和生产方式等，还保持着浓郁而古朴的藏族传统。九寨沟当地居民大多都是藏羌的少数民族，他们坐拥如此美丽的景色，但是依旧保持着属于它们的那份质朴，拥有对生命的敬畏和对生活的热爱，是个简单淳朴的民族，也让九寨沟这个上天垂爱的净地多了许多人文的温暖和厚度。',
            '虽然九寨沟先民迁徙于西藏，但是，九寨沟的民风民俗又不完全同于西藏，由于这里正处于从藏区到汉区，从牧区到农区的过渡地带，因此具有厚重的边缘文化色彩。让我们一起走进九寨的传统节庆，走进这个令人着迷的九寨世界……'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(1).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(2).jpg'
        },
        {
          title: '冰瀑节（阳历1月-3月）',
          texts: [
            '11月16日到次年3月31日是九寨沟每年的冬游时间，雪花飞舞，银装素裹的冬日童话在九寨上演，也正式迎来九寨沟冬天最为盛大的节日——冰瀑节。',
            '如果说九寨沟是童话世界，那么冬天的九寨沟就是童话世界的童话世界。水是九寨的灵魂，冬天有水的地方就能看到一朵朵冰花在冰雪世界中绚烂绽放，水里、路旁、树上、房上……到处都是它盛开的痕迹，犹如冰雪王国一般壮观圣洁。',
            '冰瀑节最大看点莫过于“九寨六绝”当中的蓝冰了，造型各异的冰柱在阳光下泛着幽蓝的光，犹如奇异的宝石一般令人心动，不仅如此，冰瀑节期间前往九寨的游客朋友还能感受到九寨沟水的神奇，雪的轻灵，冰的纯净；同时还能感受和体验当地藏、羌民族的奇异风俗，迷人的民间舞狮、转山等，是个一定不能错过的冬日旅行之地。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(3).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(4).jpg',
          image3: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(11).jpg'
        },
        {
          title: '藏经文化',
          texts: [
            '第三个卡片的内容段落1。',
            '第三个卡片的内容段落2。',
            '第三个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(5).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(6).jpg',
          image3: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(12).jpg'
        },
        {
          title: '转经筒的传说',
          texts: [
            '第四个卡片的内容段落1。',
            '第四个卡片的内容段落2。',
            '第四个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(7).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(8).jpg',
          image3: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(13).jpg'
        },
        {
          title: '传统节日与庆典',
          texts: [
            '第五个卡片的内容段落1。',
            '第五个卡片的内容段落2。',
            '第五个卡片的内容段落3。'
          ],
          image1: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(9).jpg',
          image2: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(10).jpg',
          image3: 'https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(14).jpg'
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
