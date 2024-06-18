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
        <!-- 大卡片1，包含三个小卡片 -->
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
        <!-- 大卡片2，包含三个小卡片 -->
        <div class="large-card2" :style="{ top: secondCardTop + 'px' }">
          <div class="header">候鸟资源</div>
          <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide2"></i>
          <div class="carousel-container">
            <div v-for="(card, index) in visibleCards2" :key="index" class="small-card">
              <el-card>
                <img :src="card.image" :alt="card.title" class="image">
                <div class="card-description">
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.description }}</p>
                </div>
              </el-card>
            </div>
          </div>
          <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide2"></i>
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
      topHeight: 1000, // 上半背景长度
      bottomHeight: 1000, // 下半背景长度
      cardWidth: 1000, // 卡片默认宽度
      cardHeight: 400, // 卡片默认高度
      cardBackgroundColor: 'rgb(21, 34, 72)', // 卡片默认背景颜色
      cardTop: 80, // 卡片顶部位置默认值
      cardLeft: 250, // 卡片左侧位置默认值
      cardMarginTop: 50, // 卡片上边距默认值
      secondCardTop: 1300, // 第二个大卡片的顶部位置
      currentSlide: 0,
      currentSlide2: 0,
      cards: [
        { title: "三尖杉", description: "三尖杉常绿乔木，高10～20m。树皮灰褐色至红褐色。小枝对生冬芽顶生。叶螺旋状排成2列，线状披针形，微弯下面气孔带白色。雄球花呈球形，具短柄，每个雄球花有6～16雄蕊 ，基部具1苞片；雌球花具长梗，生于枝下部叶腋，每苞有2直立胚球。", image: "src/assets/自然与动物/三尖杉.png" },
        { title: "冬虫夏草", description: "冬虫夏草又名虫草，是我国民间惯用的一种名贵滋补药材，其营养成分高于人参，可入药，也可食用，是上乘的佳肴，具有很高的营养价值。九寨沟冬虫夏草含有脂肪、蛋白质、虫草酸、对腰膝酸痛，久病体弱、贫血等有良好的补益作用。", image: "src/assets/自然与动物/冬虫夏草.png" },
        { title: "四川红杉", description: "四川红杉（学名：Larix mastersiana）为松科落叶松属的植物，为中国的特有植物。生长于海拔2,300米至3,500米的地区，属植物中较耐阴的种类，喜温凉、湿润气候，多生于沟谷、溪边或冷杉、云杉林缘，常与其它阔叶树种组成针阔混交林。", image: "src/assets/自然与动物/四川红杉.png" },
        { title: "白皮云杉", description: "白皮云杉（学名：Picea aurantiaca）别名白皮杉（中国祼子植物志），为松科云杉属的植物，是中国的特有植物。分布在中国大陆的四川康定等地，生长于海拔2,600米至3,600米的地区。多散生，因采伐范围不断扩大，林木数量日益减少。", image: "src/assets/自然与动物/白皮云杉.png" },
        { title: "连香树", description: "连香树为连香树科连香树属。落叶乔木，高10—20（—40）米，胸径达1米；有长枝和矩状短枝，该种为第三纪古热带植物的孑遗种单科植物，是较古老原始的木本植物，雌雄异株，结实较少，天然更新困难，资源稀少，已濒临灭绝状态。", image: "src/assets/自然与动物/连香树.png" },
        { title: "领春木", description: "领春木(Euptelea pleiosperma)，别名：云叶树、正心木和木桃，隶属领春木科领春木属植物，落叶小乔木，对于研究古植物区系和古代地理气候有重要的学术价值。属于国家三级保护植物。多分布于海拔720—3600m的湿润沟谷地两侧。", image: "src/assets/自然与动物/领春木.png" },
        { title: "黄栌", description: "黄栌（Cotinus coggygria Scop.）别名红叶、红叶黄栌、黄道栌、黄溜子、黄龙头、黄栌材、黄栌柴、黄栌会等，是中国重要的观赏红叶树种，叶片秋季变红，鲜艳夺目。黄栌花后久留不落的不孕花的花梗呈粉红色羽毛状在枝头形成似云似雾的景观。", image: "src/assets/自然与动物/黄栌.png" }
      ],
      cards2: [
        { title: "戴胜", description: "戴胜（学名：Upupa epops）是佛法僧目鸟类的一种。其下只有一属一种，即戴胜 （大戴胜已灭绝），主要分布在欧洲、亚洲和北非地区，在中国有广泛分布。根据DNA测序结果，部分学者建议将戴胜科和林戴胜科从佛法僧目中分离为戴胜目。", image: "src/assets/自然与动物/戴胜.png" },
        { title: "斑嘴鸭", description: "斑嘴鸭（学名：Anas poecilorhyncha）别名花嘴鸭、谷鸭、黄嘴尖鸭、火燎鸭等，属鸭科鸭属中型游禽。大型鸭类，体型大小和绿头鸭相似，体长50-64cm，体重1kg左右。雌雄羽色相似。通常栖息于淡水湖畔，亦成群活动于江河、湖泊、水库、海湾和沿海滩涂盐场等水域。", image: "src/assets/自然与动物/斑嘴鸭.png" },
        { title: "白喉红臀鹎", description: "白喉红臀鹎（学名：Pycnonotus aurigaster ）为鹎科鹎属的鸟类。额至头顶黑色而富有光泽，耳羽白色或灰白色。上体灰褐色或褐色、尾下覆羽血红色。主要生活于森林、竹林以及开阔的乡间。属杂食性，但以植物性食物为主。", image: "src/assets/自然与动物/白喉红臀鹎.png" },
        { title: "红嘴蓝鹊", description: "红嘴蓝鹊全身长约65厘米，上身蓝色，头黑色，嘴红色，尾十分长，发出多种不同的嘈吵叫声和哨声。常见并广泛分布于林缘地带、灌丛甚至村庄。指名亚种为留鸟于中国中部、西南、华南、东南和海南岛。以果实、小型鸟类及卵、昆虫和动物尸体为食，常在地面取食。", image: "src/assets/自然与动物/红嘴蓝鹊.png" },
        { title: "绿头鸭", description: "绿头鸭（学名：Anas platyrhynchos），又名大头绿（雄）、蒲鸭（雌），水鸭是家鸭的野生种。绿头鸭飞行速度可达到每小时65公里。鸭脚趾间有蹼，善于在水中觅食、戏水和求偶交配。喜欢干净，常在水中和陆地上梳理羽毛精心打扮，睡觉或休息时互相照看。", image: "src/assets/自然与动物/绿头鸭.png" },
        { title: "蓝额红尾鸲", description: "蓝额红尾鸲（学名：Phoenicurus frontalis）体长14-16cm。雄鸟夏羽前额和一短眉纹辉蓝色，头顶、头侧、后颈、颈侧、背、肩、两翅小覆羽和中覆羽以及颏、喉和上胸概为黑色具蓝色金属光泽。主要以甲虫、毛虫、蚂蚁、鳞翅目幼虫等昆虫为食，也吃少量植物果实与种子。", image: "src/assets/自然与动物/蓝额红尾鸲.png" }
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
    },
    visibleCards2() {
      const totalCards2 = this.cards2.length;
      const start = this.currentSlide2;
      const end = start + 3;
      if (end <= totalCards2) {
        return this.cards2.slice(start, end);
      } else {
        return [...this.cards2.slice(start, totalCards2), ...this.cards2.slice(0, end - totalCards2)];
      }
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.cards.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.cards.length) % this.cards.length;
    },
    nextSlide2() {
      this.currentSlide2 = (this.currentSlide2 + 1) % this.cards2.length;
    },
    prevSlide2() {
      this.currentSlide2 = (this.currentSlide2 - 1 + this.cards2.length) % this.cards2.length;
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
  height: 650px;
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

.large-card2 {
  width: 1000px;
  height: 680px;
  position: absolute; /* 绝对定位 */
  top: 1300px; /* 调整第二个大卡片的顶部位置 */
  left: 250px; /* 调整第二个大卡片的左侧位置 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center;
  justify-content: center;
  background-color: white; /* 修改背景颜色为白色 */
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.small-card {
  flex: 0 0 calc(33.33% - 10px); /* 调整小卡片的宽度，并减去间隔 */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px; /*不加这个卡片高度不一样*/
  background: white;
  border-radius: 10px;
  margin: 0 5px;
  backdrop-filter: blur(10px);
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
  height: calc(100% - 100px); /* 假设头部和其他元素占用了100px，这里需要调整 */
  display: flex;
  overflow-x: auto; /* 如果需要水平滚动，可以添加这个 */
  width: 100%;
  justify-content: center;
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
  font-family: 'Domine', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 16px;
  line-height: 24px;
  font-weight: 200;
  color: rgb(101, 106, 123);
  text-indent: 0px;
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
  left: -50px;
}

.right-arrow {
  right: -50px;
}

</style>
