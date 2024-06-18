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
          <div class="header">稀有动物</div>
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

        <!-- 大卡片3，包含三个小卡片 -->
        <div class="large-card3" :style="{ top: thirdCardTop + 'px' }">
          <div class="header">昆虫资源</div>
          <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide3"></i>
          <div class="carousel-container">
            <div v-for="(card, index) in visibleCards3" :key="index" class="small-card">
              <el-card>
                <img :src="card.image" :alt="card.title" class="image">
                <div class="card-description">
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.description }}</p>
                </div>
              </el-card>
            </div>
          </div>
          <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide3"></i>
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
      bottomHeight: 2000, // 下半背景长度
      cardWidth: 1000, // 卡片默认宽度
      cardHeight: 400, // 卡片默认高度
      cardBackgroundColor: 'rgb(21, 34, 72)', // 卡片默认背景颜色
      cardTop: 80, // 卡片顶部位置默认值
      cardLeft: 250, // 卡片左侧位置默认值
      cardMarginTop: 50, // 卡片上边距默认值
      secondCardTop: 1300, // 第二个大卡片的顶部位置
      thirdCardTop: 2100, // 第三个大卡片的顶部位置
      currentSlide: 0,
      currentSlide2: 0,
      currentSlide3: 0,
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
        { title: "大熊猫", description: "大熊猫（学名：Ailuropoda melanoleuca），属于食肉目、熊科、大熊猫亚科和大熊猫属唯一的哺乳动物，头躯长1.2-1.8米，尾长10-12厘米。体重80-120千克，最重可达180千克，体色为黑白两色，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，也有解剖刀般锋利的爪子。是世界上最可爱的动物之一。九寨沟县多次发现大熊猫活动痕迹。", image: "src/assets/自然与动物/大熊猫.png" },
        { title: "小熊猫", description: "小熊猫（学名：Ailurus fulgens）外形像猫，但较猫肥大，全身红褐色。圆脸，吻部较短，脸颊有白色斑纹。耳大，直立向前。四肢粗短，为黑褐色。尾长、较粗而蓬松，并有12条红暗相间的环纹；尾尖深褐色。头骨高而圆；听泡相对扁平；眶后突不完全发育或缺失；矢状嵴低；具翼碟骨；上腭高耸拱形，中间凹陷；中翼骨腭缢缩；冠突明显呈钩状。", image: "src/assets/自然与动物/小熊猫.png" },
        // { title: "扭角羚.png", description: "扭角羚（学名：Budorcas taxicolor）别名羚牛、金毛扭角羚、牛羚，属于牛科。体型粗壮，体长200厘米左右，肩高150厘米左右，体重250千克左右。雌雄均具角，角形弯曲特殊，呈扭曲状，故而称之“扭角羚”。尾短，四肢强健，前肢特发达，肩高大于臀高。它们体型庞大，长相奇特，似牛似羊似马，俗称“六不像”。", image: "src/assets/自然与动物/扭角羚.png" },
        { title: "白唇鹿", description: "白唇鹿（学名：Gervus albirostris）：体形高大，体长约2米，通体被毛十分厚密，毛粗硬且无绒毛，毛色在冬夏有差别。鼻端两侧、下唇记下颌白色。在臀部尾巴周围有黄色斑块，因此当地人也称它为“黄臀鹿”。雄性白唇鹿具角，角的主干扁平，故也称其“扁角鹿”。是一种典型的高寒动物，栖息地海拔在3000-5000米，植被主要是高山针叶林和高山草甸。", image: "src/assets/自然与动物/白唇鹿.png" },
        { title: "蓝马鸡", description: "蓝马鸡（学名：Crossoptilon auritum）是珍稀名贵的禽类，羽毛美丽，可作装饰用，头侧绯红，耳羽簇白色、突出于颈部顶上，通体蓝灰色，中央尾羽特长而翘起。尾羽披散下垂如马尾，故名蓝马鸡。喜欢生活在高山寒冷地区，栖息于海拔较高的2000-3000米的丛密云杉、腊梅灌木丛间，秋后随着雪线下移，而迁到有水的山谷或开阔的灌丛草原。", image: "src/assets/自然与动物/蓝马鸡.png" },
        { title: "金丝猴", description: "川金丝猴（拉丁学名：Rhinopithecus roxellanae）别名狮子鼻猴、仰鼻猴、金绒猴、兰面猴、洛克安娜猴、长尾子、线子、线狨、马狨、果然兽、果然狨、金线狨，属灵长目、猴科、仰鼻猴属。毛质柔软，为中国特有的珍贵动物，群栖息于2000-3000高海拔地区，植食，有垂直迁徙的习性，群居，有丰富的社群行为，有多种的喊叫声，为国家一级保护动物。", image: "src/assets/自然与动物/金丝猴.png" }
      ],
      cards3: [
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
    },
    visibleCards3() {
      const totalCards3 = this.cards3.length;
      const start = this.currentSlide3;
      const end = start + 3;
      if (end <= totalCards3) {
        return this.cards3.slice(start, end);
      } else {
        return [...this.cards3.slice(start, totalCards3), ...this.cards3.slice(0, end - totalCards3)];
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
    },
    nextSlide3() {
      this.currentSlide3 = (this.currentSlide3 + 1) % this.cards3.length;
    },
    prevSlide3() {
      this.currentSlide3 = (this.currentSlide3 - 1 + this.cards3.length) % this.cards3.length;
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
  height: 750px;
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

.large-card3 {
  width: 1000px;
  height: 680px;
  position: absolute; /* 绝对定位 */
  top: 2000px; /* 调整第三个大卡片的顶部位置 */
  left: 250px; /* 调整第三个大卡片的左侧位置 */
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
