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
import image1 from '@/assets/标志景点/卧龙海.png';  // 替换为实际路径
import image2 from '@/assets/标志景点/火花海.png';  // 替换为实际路径
import image4 from '@/assets/标志景点/老虎海.png';  // 替换为实际路径
import image3 from '@/assets/标志景点/树正沟景点.png';  // 替换为实际路径
import image5 from '@/assets/5.3.png';  // 替换为实际路径

export default {
  data() {
    return {
      currentSlide: 0,
      cards: [
        {
          title: "犀牛海",
          description: "犀牛海海拔2301米的地皮，长2000米，宽225米，深17米，是九寨沟第二大湖泊。据说一位高僧的得道高僧，骑着犀牛来到此处，喝了湖边的神泉启示而顿，便将缓骑犀牛留在此处，因此而得名。春夏季节，湖水一片翠绿，秋高气爽，满山的秋色倒影于湖中，更胜实景。",
          image: image1
        },
        {
          title: "老虎海",
          description: "海拔2298米，长310米，宽194米，深23米。深秋季节，彩林倒映在清澈的湖水中，斑斓陆离，犹如玻璃的斑纹。深秋季节，湖岸山上层林尽染，枝繁叶茂的林木倒映在清澈的湖水中，犹如老虎身上玻璃的斑纹。",
          image: image2
        },
        {
          title: "卧龙海",
          description: "海拔2220米，长约253米，宽2255米，水深24米，水底有条乳黄色的纯华堤埂，外形像沉卧在水中的巨龙。湖面平静时，透过清澈的湖水，卧龙似沉睡在水底；微风吹过湖面泛起涟漪，龙头仿佛在喘动。风稍强时，湖面波浪起伏，卧龙像惊悚醒，摇头摆尾；风更时，湖面瞬间破碎，卧龙剡时腾空而去，无影无踪。",
          image: image3
        },
        {
          title: "老虎海",
          description: "海拔2220米，长约253米，宽2255米，水深24米，水底有条乳黄色的纯华堤埂，外形像沉卧在水中的巨龙。湖面平静时，透过清澈的湖水，卧龙似沉睡在水底；微风吹过湖面泛起涟漪，龙头仿佛在喘动。风稍强时，湖面波浪起伏，卧龙像惊悚醒，摇头摆尾；风更时，湖面瞬间破碎，卧龙剡时腾空而去，无影无踪。",
          image: image4
        },
        {
          title: "image5",
          description: "海拔2220米，长约253米，宽2255米，水深24米，水底有条乳黄色的纯华堤埂，外形像沉卧在水中的巨龙。湖面平静时，透过清澈的湖水，卧龙似沉睡在水底；微风吹过湖面泛起涟漪，龙头仿佛在喘动。风稍强时，湖面波浪起伏，卧龙像惊悚醒，摇头摆尾；风更时，湖面瞬间破碎，卧龙剡时腾空而去，无影无踪。",
          image: image5
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
  font-size: 12px; /* 调整文字大小 */
  line-height: 1.4;
}

.details-link {
  color: #3498db;
  text-decoration: none;
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
