<template>
  <div class="blue-background">
    <div class="image-container">
      <figure class="image-figure">
        <img src="@/assets/标志景点/树正沟景点.png" alt="树正沟景点" class="image">
      </figure>
    </div>

    <div class="carousel">
      <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide"></i>
      <div class="carousel-container">
        <div v-for="(card, index) in visibleCards" :key="index" class="carousel-card">
          <figure class="image-figure">
            <img :src="card.image" :alt="card.title" class="image">
          </figure>
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <a href="#" class="details-link">详细</a>
          </div>
        </div>
      </div>
      <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide"></i>
    </div>
  </div>
</template>

<script>
import 卧龙海 from '@/assets/标志景点/卧龙海.png';
import 火花海 from '@/assets/标志景点/火花海.png';
import 老虎海 from '@/assets/标志景点/老虎海.png';
import 双龙海 from '@/assets/标志景点/双龙海.png';
import 树正寨 from '@/assets/标志景点/树正寨.png';
import 树正瀑布 from '@/assets/标志景点/树正瀑布.png';
import 树正群海 from '@/assets/标志景点/树正群海.png';
import 犀牛海 from '@/assets/标志景点/犀牛海.png';
import 盆景滩 from '@/assets/标志景点/盆景滩.png';
import 芦苇海 from '@/assets/标志景点/芦苇海.png';



export default {
  data() {
    return {
      currentSlide: 0,
      cards: [
        {
          title: "卧龙海",
          description: "海拔2220 米，长约253 米、宽2255 米、水深24 米，水底有条乳黄色的钙华堤埂，外形像沉卧在水中的巨龙。湖面平静时，透过清澈的湖水，卧龙似沉睡在水底；微风吹过湖面泛起涟漪，龙身仿佛在蠕动。风稍强时，湖面波浪起伏，卧龙像被惊醒，摇头摆尾；风强时，湖面瞬间破碎，卧龙刹时腾空而去，无影无踪。",
          image: 卧龙海
        },
        {
          title: "老虎海",
          description: "海拔2298 米，长310 米，宽194 米，深23 米。深秋季节，彩林倒映在清澈的湖水中，斑驳陆离，犹如斑斓的虎纹。深秋季节，湖岸山上层林尽染，姹紫嫣红的林木倒映在清澈的湖水中，犹如老虎身上斑斓的虎纹。",
          image: 老虎海
        },
        {
          title: "双龙海",
          description: "双龙海海拔2200 米，长290 米、宽247 米、水深9 米，透过晶莹的湖水，可见湖中有两条带状的生物钙华堤埂隐藏于水底，湖堤上部为钙华，下部为冰碛物，宛如两条蛟龙，似动似静。",
          image: 双龙海
        },
        {
          title: "树正寨",
          description: "树正寨是坐落在树正沟内的藏羌村落，村寨后有一座海拔4200米的达戈男神山，面对树正群海。寨内建有九宝莲花菩提塔，它们代表九个藏族村寨团结、祥和、幸福。这里曾建设民族文化村，可以观赏九寨沟藏式的建筑风格、彩绘及藏民的服饰，体验藏民的日常生活，感受藏民的衣、食、住、行。",
          image: 树正寨
        },
        {
          title: "火花海",
          description: "2017年九寨沟7.0级地震使火花海出水口堤坝崩塌，形成长40米、宽12米、深15米的决口，湖泊景观消失，发育裂缝100余条，裂缝最长50m、宽1m、深6.9 m。经反复论证，科研人员以震损钙华、落石、糯米灰浆等生态材料，修复了坝体、裂缝，防治了次生灾害，恢复了湖泊景观。",
          image: 火花海
        },
        {
          title: "树正瀑布",
          description: "树正瀑布海拔2295m，高11m，宽62m。瀑布呈向前凸起的圆弧状，水流多级跌落。由首尾相接的众多飞瀑组成，堤埂上的灌木，傲立于激流，长年经受流水的冲击，风姿绰约，形成特殊的植物群落和世间罕见的自然奇观。",
          image: 树正瀑布
        },
        {
          title: "树正群海",
          description: "海拔2187-2280 米。其地形是在河谷迭加泥石流堆积物基础上，再经钙华沉积，形成大小19 个湖泊，顺着沟谷层层迭迭。这里森林、湖泊、小瀑布相错相连，呈现“树在水中生，水在林间流，人在画中游”的奇特景观。",
          image: 树正群海
        },
        {
          title: "犀牛海",
          description: "犀牛海海拔2301 米的地区，长2000 米、宽225 米、深17 米，是九寨沟第二大湖泊。据说一位病重的得道高僧，骑着犀牛来到此处，喝了湖边的神泉后竟不治而愈，便将爱骑犀牛留在此处，因此而得名。春夏季节，湖水一片翠绿；秋高气爽，满山的秋色倒影于湖中，更胜实景。",
          image: 犀牛海
        },
        {
          title: "盆景滩",
          description: "海拔2190 米，长218 米、宽98 米，水深0.8 米，是进入九寨沟的第一个滩流景观。浅滩上，柳、柏、杨、松，杜鹃等植物丛生，缀以花草、石块，树干四周因钙华堆积形成略高于水面的天然盆堤，宛若一组组盆景。",
          image: 盆景滩
        },
        {
          title: "芦苇海",
          description: "海拔2192 米，高约15 米、宽约10 米，位于芦苇海东侧对面石灰岩崖壁上，因岩石自然风化痕迹和植物装饰作用，形成一幅端庄秀丽的少女脸庞，传说是九寨沟的沃洛瑟嫫女神。",
          image: 芦苇海
        }
      ]
    };
  },
  computed: {
    visibleCards() {
      const totalCards = this.cards.length;
      const start = this.currentSlide;
      const end = start + 3;
      if (end <= totalCards) {
        return this.cards.slice(start, end);
      } else {
        return [...this.cards.slice(start, totalCards), ...this.cards.slice(0, end - totalCards)];
      }
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.cards.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.cards.length) % this.cards.length;
    }
  }
};
</script>

<style scoped>
/* 设置蓝色背景 */
.blue-background {
  background-color: rgb(126, 202, 186);
  min-height: 100vh; /* 确保背景颜色覆盖整个视口高度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 调整为顶部对齐 */
  align-items: center;
  margin-top: 60px;
}

/* 设置图片容器的样式 */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* 图片和卡片之间的间距 */
}

.image-figure {
  margin: 0;
}

.image {
  max-width: 100%; /* 确保图片不会超出其容器的宽度 */
  max-height: 80vh; /* 设置图片最大高度为视口高度的80% */
  object-fit: contain; /* 保持图片的纵横比 */
}

/* 设置轮播图样式 */
.carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;
}

.carousel-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
}

.carousel-card {
  flex: 0 0 28%; /* 调整卡片宽度 */
  box-sizing: border-box;
  padding: 10px; /* 减少卡片内边距 */
  background: white;
  border-radius: 10px;
  margin: 0 5px; /* 减少卡片外边距 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center; /* 卡片内容居中 */
}

.card-content {
  padding: 10px; /* 调整卡片内容内边距 */
}

.card-content h2 {
  margin: 0 0 5px; /* 调整标题的外边距 */
}

.card-content p {
  font-family: domine, sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 16px;
  color: #656a7b;
  line-height: 24px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 200;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-align: left; /* 设置为有效的值，例如 left */
  text-indent: 0px;
}



.details-link {
  font-family: nexa;
  font-size: 14.4px;
  color: #7ecaba;
  line-height: 36px; /* 确保行高一致 */
  vertical-align: middle;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  text-decoration: none;
  text-align: left; /* 确保文本左对齐 */
  display: inline-block; /* 保持内联块级元素 */
  margin-top: auto; /* 自动分配顶部边距以对齐底部 */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 确保内容均匀分布 */
  padding: 10px; /* 调整卡片内容内边距 */
}


.details-link:hover {
  text-decoration: underline;
}

.carousel-arrow {
  font-size: 2rem; /* 调整图标大小 */
  cursor: pointer;
  color: white; /* 箭头颜色 */
  background-color: rgba(0, 0, 0, 0.5); /* 背景颜色 */
  border-radius: 50%; /* 圆形背景 */
  padding: 10px; /* 内边距 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center; /* 确保图标居中 */
  line-height: normal; /* 重置行高，避免图标位置不正确 */
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

/* 使用Element Plus的箭头图标 */
.el-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 1;
}

.el-icon-arrow-left {
  left: 10px;
}

.el-icon-arrow-right {
  right: 10px;
}
</style>
