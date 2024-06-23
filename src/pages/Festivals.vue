<template>
  <div class="home">
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

      <div class="card-container" style="top: 630px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>传统节庆</span>
          </div>
          <div class="card-body">
            <p class="card-text">藏文化，向来博大精深，源远流长。五百年前，九寨沟的先民们从遥远的“世界第三级”－－西藏阿里迁徙至此，世世代代，繁衍生息，与周围的羌族、回族、汉族共同携手，创造了独特的康巴文化。</p>
            <p class="card-text">至今，九寨沟人的衣食往行、婚丧嫁娶和生产方式等，还保持着浓郁而古朴的藏族传统。九寨沟当地居民大多都是藏羌的少数民族，他们坐拥如此美丽的景色，但是依旧保持着属于它们的那份质朴，拥有对生命的敬畏和对生活的热爱，是个简单淳朴的民族，也让九寨沟这个上天垂爱的净地多了许多人文的温暖和厚度。</p>
            <p class="card-text">虽然九寨沟先民迁徙于西藏，但是，九寨沟的民风民俗又不完全同于西藏，由于这里正处于从藏区到汉区，从牧区到农区的过渡地带，因此具有厚重的边缘文化色彩。让我们一起走进九寨的传统节庆，走进这个令人着迷的九寨世界……</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="12">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(1).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="12">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(2).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

      <div class="card-container" style="top: 1380px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>冰瀑节（阳历1月-3月）</span>
          </div>
          <div class="card-body">
            <p class="card-text">11月16日到次年3月31日是九寨沟每年的冬游时间，雪花飞舞，银装素裹的冬日童话在九寨上演，也正式迎来九寨沟冬天最为盛大的节日——冰瀑节。每年的这个时候，九寨沟的山水被厚厚的白雪覆盖，银装素裹，仿佛进入了一个梦幻的冬日童话世界，吸引了大量的游客前来观赏。</p>
            <p class="card-text">如果说九寨沟是童话世界，那么冬天的九寨沟就是童话世界的童话世界。水是九寨的灵魂，冬天有水的地方就能看到一朵朵冰花在冰雪世界中绚烂绽放，水里、路旁、树上、房上……到处都是它盛开的痕迹，犹如冰雪王国一般壮观圣洁。</p>
            <p class="card-text">冰瀑节最大看点莫过于“九寨六绝”当中的蓝冰了，造型各异的冰柱在阳光下泛着幽蓝的光，犹如奇异的宝石一般令人心动，不仅如此，冰瀑节期间前往九寨的游客朋友还能感受到九寨沟水的神奇，雪的轻灵，冰的纯净；同时还能感受和体验当地藏、羌民族的奇异风俗，迷人的民间舞狮、转山等，是个一定不能错过的冬日旅行之地。</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(5).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(6).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(12).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>


      <div class="card-container" style="top: 2010px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>民俗风情月（阳历3月）</span>
          </div>
          <div class="card-body">
            <p class="card-text">九寨沟不仅景色优美，而且有着特别丰富的本土民俗民风，特别是藏族同胞的生活、民俗、文化传承等，一直以来也吸引着广大的游客。九寨沟民俗风情月在每年的3、4月举行，为期一月，展示九寨沟悠远的民族文化和迷人的民俗风情，游客朋友均可自行参加，体验藏族同胞最为热情的风情魅力。</p>
            <p class="card-text">九寨沟民俗风情月主要围绕美景、美食、服饰、婚庆展示等进行，伴随丰富的本土特色民俗文化展演，同时还将举办风情狂欢夜等活动，释放最令人动心的九寨风情，展示最具特色的九寨文化。</p>
            <p class="card-text"> 民俗风情月期间不仅能让海内外游客欣赏到历史悠久、独具特色的民间文艺舞蹈、国家级非物质文化遗产—亻刍舞，聆听宽广自然具有强烈民族生活气息的山歌对唱。还可观瞻则查洼古藏寨建筑文化，藏文化学者将带您感受古朴的安多文化，邀您畅游九寨历史长河。</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(15).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(16).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(17).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

      <div class="card-container" style="top: 2640px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>嘛智文化节（藏历4月；阳历5月）</span>
          </div>
          <div class="card-body">
            <p class="card-text"> “嘛智”是苯教三颂辞或三大真言中的一部分，通常称为“八字真言”。九寨沟扎如寺每年在农历举行嘛智节祭祀、祈福等法事活动。由全寺僧人提前一个多月进行准备，从农历四月初八这天开始，寺里的高僧大德每天念经，一直持续到农历四月十四，农历四月十五对外举行嘛智节的祭祀、祈福等法事活动。</p>
            <p class="card-text">主要活动：麻孜会是扎如寺的宗教盛典，也是九寨沟最隆重的节日。会前3天，全寺喇嘛都要集中在寺院吃斋念经，排练节目。庙会当天，前来扎如寺参拜的人群络绎不绝，方圆数百里的群众身着华丽的节日盛装，手拿龙达、香烛，怀抱唐卡，带着满满的虔诚前往扎如寺祈福；游客朋友们也可选择亲自体验九寨沟这种独特的宗教文化。</p>
            <p class="card-text">九寨沟景区在发展旅游开放的同时，不断保护和挖掘九寨沟本土民俗文化，“嘛智文化节”就是当中非常重要的一个文化节日，是九寨沟非常重视的民俗文化产业，也是游客朋友们难得体验到的九寨宗教文化的独特魅力。</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(19).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(20).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(22).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

      <div class="card-container" style="top: 3270px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>日桑文化节（藏历4月；阳历5月）</span>
          </div>
          <div class="card-body">
            <p class="card-text">日桑文化节又被称为祭“神山、神水“的节日。九寨沟藏族信仰苯教，相信万物有神，水有水神，山有山神，日桑文化节就是他们祭拜神山、神水的传统节庆。九寨沟在每年藏庆4月（阳历6月）都会举行一次，时间为期5天，游客们都可以参与进来。</p>
            <p class="card-text">九寨沟日桑文化节期间，将选择一块空旷地搭建帐篷群，中间为“讲经主体帐篷”，专为讲经、说道的高僧大德准备；周边为村寨帐篷群，用于九寨沟九个藏族村寨的藏族同胞参会所用。</p>
            <p class="card-text">日桑文化节期间，景区各村寨的人要进行背水、抱青稞袋、架粮食、郭特（走高跷）、藏式军棋和母语叙事比赛等竞技比赛；还有各种传统民族歌谣、舞蹈等表演，让每个前往九寨沟的人都能了解不一样的藏族魅力和九寨风情。</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(11).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(12).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(13).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

      <div class="card-container" style="top: 3900px;">
        <el-card class="box-card">
          <div class="card-header">
            <span>藏历新年（藏历1月）</span>
          </div>
          <div class="card-body">
            <p class="card-text">古时候没有藏历，人们认为桃花一开就算一个新年的开始。现在的藏历起源于公元 1027 年，从此，藏历的第一天固定为藏历年。藏历年是藏族最盛大、最为隆重的传统节日，是藏族人民一年一度的新春佳节，更是快乐而载歌载舞的时刻，因为全民信仰佛教，节日活动洋溢着浓厚的宗教气氛，是一个庆祝和祈祷兼具的民族节日。</p>
            <p class="card-text">藏历新年初一，煨桑和打新水是藏族民众藏历新年要做的重要事情。煨桑是藏族群众祈愿的一种礼俗，藏族群众都要到寺庙和在自家的煨桑炉里煨桑祈福，许下新一年的美好愿望，并祈求神灵保佑人畜平安。藏历新年的第一桶水是最干净的水，所以第一个要为菩萨们敬上。</p>
            <p class="card-text">九寨沟的藏历新年不仅有隆重的节日氛围，更是让每一位到来的游客，都能感受这方水土的独特魅力，体验到一份独一无二的民俗风情。游客们不仅可以观看到传统的藏族歌舞表演、参与盛大的庙会和祈福仪式，还能品尝到当地居民精心准备的传统美食和美酒。</p>
            <el-row class="card-images" gutter="10">
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(8).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(9).jpg" class="card-image"></el-image>
              </el-col>
              <el-col :span="8">
                <el-image src="https://www.jiuzhai.com/templates/rt_topaz/custom/images/10066%20(10).jpg" class="card-image"></el-image>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>

    </el-row>
    <el-backtop :right="100" :bottom="100" />
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'Festivals',
  components: {AppFooter},
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
.home {
  position: relative; /* 确保父容器有相对定位或绝对定位 */
  min-height: 100vh; /* 确保内容高度至少为视口高度，以便页脚可以在底部 */
  padding-bottom: 60px; /* 为页脚预留空间，避免内容覆盖 */
}
.container {
  width: 100%;
  height: 4800px; /* 增加高度以适应多个卡片 */
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


