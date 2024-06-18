<template>
  <div class="cluture-container">
    <div class="sections">
      <div class="top-section" :style="{ height: topHeight + 'px' }">
        <!-- 顶部内容 -->
        <el-card :style="{ width: cardWidth + 'px', height: cardHeight + 'px', backgroundColor: cardBackgroundColor, top: cardTop + 'px', left: cardLeft + 'px', position: 'absolute', borderRadius: '15px', marginTop: cardMarginTop + 'px' }">
          <div class="card-content">
            <h1 class="title">自然与动物</h1>
            <p class="text">
              九寨沟是中国第一个以保护自然风景为主要目的的自然保护区。保护区森林覆盖率超过80%，藤本植物有38种，名贵中药有冬虫夏草、雪莲、雪茶、川贝母、天麻等。有74种国家保护珍稀植物，18种国家保护动物。
            </p>
            <p class="text">
              九寨沟国家级自然保护区有陆栖脊椎动物122种，其中兽类21种，鸟类93种，爬行类4种，两栖类4种。拥有国家级保护动物，一级有大熊猫、金丝猴、豹、白唇鹿、扭角羚、绿尾虹雉；二级有猕猴、小熊猫、林麝、斑羚、蓝马鸡、红腹锦鸡、红腹角雉、斑尾榛鸡、雉鹑、金雕等。
            </p>
          </div>
        </el-card>
        <!-- 大卡片，包含三个小卡片 -->
        <div class="large-card">
          <div class="header">植物资源</div>
          <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide"></i>
          <div class="carousel-container">
            <div v-for="(card, index) in visibleCards" :key="index" class="small-card">
              <el-card>
                <img :src="card.image" :alt="card.title" class="image">
                <div class="card-description">
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.description }}</p>
                </div>
              </el-card>
            </div>
          </div>
          <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide"></i>
        </div>
      </div>
      <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
        <!-- 底部内容 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cluture',
  data() {
    return {
      topHeight: 1000, // 默认值
      bottomHeight: 300, // 默认值
      cardWidth: 1000, // 卡片默认宽度
      cardHeight: 400, // 卡片默认高度
      cardBackgroundColor: 'rgb(21, 34, 72)', // 卡片默认背景颜色
      cardTop: 80, // 卡片顶部位置默认值
      cardLeft: 250, // 卡片左侧位置默认值
      cardMarginTop: 50, // 卡片上边距默认值
      currentSlide: 0,
      cards: [
        { title: "三尖杉", description: "三尖杉常绿乔木，高10～20m。树皮灰褐色至红褐色。小枝对生冬芽顶生。叶螺旋状排成2列，线状披针形，微弯下面气孔带白色。雄球花呈球形，具短柄，每个雄球花有6～16雄蕊 ，基部具1苞片；雌球花具长梗，生于枝下部叶腋，每苞有2直立胚球。", image: "src/assets/自然与动物/三尖杉.png" },
        { title: "冬虫夏草", description: "冬虫夏草又名虫草，是我国民间惯用的一种名贵滋补药材，其营养成分高于人参，可入药，也可食用，是上乘的佳肴，具有很高的营养价值。九寨沟冬虫夏草含有脂肪、蛋白质、虫草酸、对腰膝酸痛，久病体弱、贫血等有良好的补益作用。", image: "src/assets/自然与动物/冬虫夏草.png" },
        { title: "冷杉", description: "冷杉（学名：Abies fabri （Mast.）Craib）常绿乔木，树干端直，枝条轮生。树皮灰色或深灰色，裂成不规则的薄片固着于树干上，内皮淡红色；一年生枝淡褐黄色、淡灰黄色或淡褐色。球果卵状圆柱形或短圆柱形，有短梗，熟时暗黑色或淡蓝黑色，微被白粉。", image: "src/assets/自然与动物/冷杉.png" },
        { title: "四川红杉", description: "四川红杉（学名：Larix mastersiana）为松科落叶松属的植物，为中国的特有植物。生长于海拔2,300米至3,500米的地区，属植物中较耐阴的种类，喜温凉、湿润气候，多生于沟谷、溪边或冷杉、云杉林缘，常与其它阔叶树种组成针阔混交林。", image: "src/assets/自然与动物/四川红杉.png" },
        { title: "白皮云杉", description: "白皮云杉（学名：Picea aurantiaca）别名白皮杉（中国祼子植物志），为松科云杉属的植物，是中国的特有植物。分布在中国大陆的四川康定等地，生长于海拔2,600米至3,600米的地区。多散生，因采伐范围不断扩大，林木数量日益减少。", image: "src/assets/自然与动物/白皮云杉.png" },
        { title: "红松", description: "红松（Pinus koraiensis Sieb. et Zucc.）裸子植物，常绿乔木，高可达40米。小枝密生褐色柔毛。叶5针一束，粗硬，树脂道3个，叶鞘早落。球果卵状圆锥形，种鳞先端钝，向外反曲，成熟时种子不脱落。常同鱼鳞松、红皮云杉组成混交林。耐寒性强，喜微酸性土或中性土。", image: "src/assets/自然与动物/红松.png" },
        { title: "连香树", description: "连香树为连香树科连香树属。落叶乔木，高10—20（—40）米，胸径达1米；有长枝和矩状短枝，该种为第三纪古热带植物的孑遗种单科植物，是较古老原始的木本植物，雌雄异株，结实较少，天然更新困难，资源稀少，已濒临灭绝状态。", image: "src/assets/自然与动物/连香树.png" },
        { title: "领春木", description: "领春木(Euptelea pleiosperma)，别名：云叶树、正心木和木桃，隶属领春木科领春木属植物，落叶小乔木，对于研究古植物区系和古代地理气候有重要的学术价值。属于国家三级保护植物。多分布于海拔720—3600m的湿润沟谷地两侧。", image: "src/assets/自然与动物/领春木.png" },
        { title: "黄栌", description: "黄栌（Cotinus coggygria Scop.）别名红叶、红叶黄栌、黄道栌、黄溜子、黄龙头、黄栌材、黄栌柴、黄栌会等，是中国重要的观赏红叶树种，叶片秋季变红，鲜艳夺目。黄栌花后久留不落的不孕花的花梗呈粉红色羽毛状在枝头形成似云似雾的景观。", image: "src/assets/自然与动物/黄栌.png" },
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

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400&display=swap');

.cluture-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto; /* 使容器可以垂直滚动 */
}

.sections {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative; /* 确保子元素的绝对定位基于此容器 */
}

.top-section {
  background-color: rgb(140, 219, 70);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* 使其子元素可以进行绝对定位 */
}

.bottom-section {
  background-color: rgb(87, 189, 95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-content {
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0);
}

.card-content .title {
  font-family: 'Quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 65px;
  color: rgb(87, 189, 95);
  line-height: 68.08px;
  font-weight: 400;
  text-align: center;
  margin: -10px auto 5px auto; /* 自然与动物的上边距 */
}

.card-content .text {
  font-family: 'Domine', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 22px;
  line-height: 28.08px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-indent: 2em; /* 首行缩进 */
}

.large-card {
  width: 1000px;
  height: 600px;
  position: absolute; /* 绝对定位 */
  top: 600px; /* 调整大卡片的顶部位置 */
  left: 250px; /* 调整大卡片的左侧位置 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center;
  justify-content: center;
  background-color: white; /* 修改背景颜色为白色 */
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  font-family: 'Quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 36px;
  color: rgb(21, 34, 72);
  line-height: 54px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-indent: 0px;
  background-color: rgba(0, 0, 0, 0);
}

.carousel-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
}
.small-card {
  flex: 0 0 30%; /* 调整小卡片的长度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; /* 使内容占满整个卡片 */
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  margin: 0 5px;
  backdrop-filter: blur(10px);
  height: 100%; /* 使卡片填满可用高度 */
}

.image {
  display: block;
  width: 100%; /* 确保图片宽度填满容器 */
  height: 200px; /* 设置图片固定高度 */
  object-fit: cover; /* 覆盖整个容器区域 */
  margin: 0; /* 去除默认外边距 */
  padding: 0; /* 去除默认内边距 */
  border: none; /* 去除默认边框 */
}

.card-description {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px; /* 为描述添加内边距 */
  flex-grow: 1; /* 使描述部分占用可用空间 */
}

.card-description p {
  font-size: 1em;
  margin-top: auto; /* 确保段落占用剩余空间 */
}


.carousel-arrow {
  font-size: 2rem;
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}


</style>