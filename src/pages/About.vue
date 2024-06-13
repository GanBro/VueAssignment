<template>
  <div class="about-page">
    <div class="about-container">
      <div class="left-pane">
        <!-- 左侧内容 -->
      </div>
      <div class="right-pane">
        <!-- 右侧内容 -->
      </div>
    </div>
    <div class="center-card1">
      <el-card class="box-card1">
        <div class="card-content">
          <p class="title">九寨沟简介</p>
          <div class="body-content">
            <!-- 正文内容 -->
            <p>九寨沟位于四川省西北部岷山山脉南段的阿坝藏族羌族自治州九寨沟县漳扎镇境内，地处岷山南段弓杠岭的东北侧。距离成都市400多千米，系长江水系嘉陵江上游白水江源头的一条大支沟。 九寨沟自然保护区地势南高北低，山谷深切，高差悬殊。北缘九寨沟口海拔仅2000米，中部峰岭均在4000米以上，南缘达4500米以上，主沟长30多公里。</p>
            <p>九寨沟是世界自然遗产、国家重点风景名胜区、国家AAAAA级旅游景区、国家级自然保护区、国家地质公园、世界生物圈保护区网络，也是中国第一个以保护自然风景为主要目的的自然保护区。</p>

            <!-- 图片部分 -->
            <div class="image-container">
              <figure>
                <img src="@/assets/盆景滩.png" alt="盆景滩">
                <figcaption>盆景滩</figcaption>
              </figure>
              <figure>
                <img src="@/assets/芦苇海.png" alt="芦苇海">
                <figcaption>芦苇海</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="center-card2">
      <el-card class="box-card2">
        <div class="card-content">
          <p class="title">九寨沟由来</p>
          <div class="body-content">
            <!-- 正文内容 -->
            <p>九寨沟的得名来自于景区内九个藏族寨子（树正寨、则查洼寨、黑角寨、荷叶寨、盘亚寨、亚拉寨、尖盘寨、热西寨、郭都寨），这九个寨子又称为“和药九寨”。由于有九个寨子的藏民世代居住于此，故名为“九寨沟”。</p>
            <p>世界自然遗产组织的官员，在1992年第一次到九寨沟考察时，从沟口进去时，大家被大雨蒙住了视线。当他们一行来到火花海景点时，天空突然放睛，阳光穿过空中的雾霭，在天空中画出了一道美丽的彩虹，妖娆艳丽的火花海呈现在这些世界级官员的眼前，他们被眼前的美景惊呆了。随即，他们俯下身跪在海子边上，向这大自然的造化叩拜。事后他们回忆说，这里的景色太美了，让他们太吃惊了。他们不曾想象过，大自然竟有如此的鬼斧神工，将中国的九寨沟点画得如天仙般的美丽。</p>
            <p>他们的叩拜，是对大自然的敬仰；他们的叩拜，是感谢中国，为世界留下了一块瑰宝，为人间留住了一片仙境。</p>
            <!-- 图片部分 -->
            <div class="image-container">
              <figure>
                <img src="@/assets/树正群海.png" alt="树正群海">
                <figcaption>树正群海</figcaption>
              </figure>
              <figure>
                <img src="@/assets/诺日朗瀑布.png" alt="诺日朗瀑布">
                <figcaption>诺日朗瀑布</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <!-- 第三个卡片 -->
    <div class="center-card3">
      <el-card class="box-card3">
        <div class="card-content">
          <p class="title">童话世界</p>
          <div class="body-content">
            <p>目前，九寨沟景区仅保留了树正寨、荷叶寨、则查洼寨这三个村寨，善良淳朴的他们，用微笑迎接着前来九寨沟的每一个人。而在这些村寨中，最壮观的莫过于树正寨前的“九宝莲花菩提塔”，七彩经幡随风飘荡，圣洁的白塔在阳光下仿若闪着光，这里也是众多游客到来时，都会双手合十，轻声祭拜的地方。</p>
            <p>九寨沟是大自然鬼斧神工之杰作。这里四周雪峰高耸，湖水清澈艳丽，飞瀑多姿多彩，急流汹涌澎湃，林木青葱婆娑。蓝蓝的天空，明媚的阳光，清新的空气和点缀其间的古老村寨、栈桥、磨坊，组成了一幅内涵丰富、和谐统一的优美画卷，历来被当地藏族同胞视为“神山圣水”。九寨沟景区享誉中外，东方人称之为“人间仙境”，西方人则将之誉为“童话世界”。</p>
            <!-- 图片部分 -->
            <div class="image-container">
              <figure>
                <img src="@/assets/树正寨.png" alt="树正群海">
                <figcaption>树正寨</figcaption>
              </figure>
              <figure>
                <img src="@/assets/桃花摇曳.png" alt="诺日朗瀑布">
                <figcaption>桃花摇曳</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-page {
  position: relative; /* 确保子元素可以使用绝对定位 */
  display: flex; /* 允许子元素使用flex布局 */
  flex-direction: column; /* 使内容垂直排列 */
  height: 100vh; /* 页面高度占满整个视窗 */
  margin-top: 60px; /* 确保内容不会被导航栏覆盖 */
}

.about-container {
  display: flex; /* 水平排列左侧和右侧面板 */
  flex: 1; /* 使其占满剩余空间 */
}

.left-pane, .right-pane {
  flex: 1; /* 左右面板各占一半 */
  height: 2050px; /* 左右面板高度 */
  display: flex; /* 允许子元素使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.left-pane {
  background-color: rgb(126, 202, 186); /* 左侧面板背景色 */
}

.right-pane {
  background-color: rgb(226, 252, 203); /* 右侧面板背景色 */
}

.center-card1, .center-card2, .center-card3 {
  position: absolute; /* 使用绝对定位 */
  left: 50%; /* 固定的左侧位置 */
  transform: translateX(-50%); /* 使卡片水平居中 */
  z-index: 10; /* 确保卡片在最上层 */
}

.center-card1 {
  top: 50px; /* 固定的顶部位置 */
}

.center-card2 {
  top: 800px; /* 固定的顶部位置 */
}

.center-card3 {
  top: 1620px; /* 第三个卡片的位置 */
}

.box-card1 {
  width: 1100px; /* 卡片宽度 */
  height: 700px; /* 卡片高度 */
  overflow: auto; /* 当内容超过卡片大小时显示滚动条 */
  padding: 20px; /* 增加卡片内边距 */
}
.box-card2 {
  width: 1100px; /* 卡片宽度 */
  height: 770px; /* 卡片高度 */
  overflow: auto; /* 当内容超过卡片大小时显示滚动条 */
  padding: 20px; /* 增加卡片内边距 */
}
.box-card3 {
  width: 1100px; /* 卡片宽度 */
  height: 730px; /* 卡片高度 */
  overflow: auto; /* 当内容超过卡片大小时显示滚动条 */
  padding: 20px; /* 增加卡片内边距 */
}
.card-content {
  display: flex;
  flex-direction: column; /* 垂直排列标题和正文 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 内容占满卡片高度 */
}

.title {
  margin-top: 15px;
  margin-bottom: 8px;
  font-family: 'Quando', sans-serif; /* 使用指定的字体 */
  font-size: 36px; /* 字体大小 */
  line-height: 54px; /* 行高 */
  color: #152248; /* 字体颜色 */
  font-weight: 400; /* 字体粗细 */
  font-style: normal; /* 字体样式 */
  text-transform: none; /* 文本大小写转换 */
  text-decoration: none; /* 文本装饰 */
  text-align: center;
}

.body-content {
  text-align: left; /* 正文左对齐 */
  font-family: 'Domine', sans-serif; /* 使用指定的字体 */
  font-size: 18.4px; /* 字体大小 */
  line-height: 27.6px; /* 行高 */
  color: #656a7b; /* 字体颜色 */
  width: 100%; /* 内容占满宽度 */
  padding-left: 20px; /* 增加正文左边距 */
  padding-right: 20px; /* 增加正文右边距 */
}

.body-content p {
  text-indent: 2em; /* 段落首行缩进两格 */
  margin: 0 0 15px; /* 段落间距 */
}

.image-container {
  display: flex;
  justify-content: space-between; /* 图片左右分布 */
  margin: 20px 0; /* 图片与正文的间距 */
}

.image-container figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%; /* 图片宽度 */
}

.image-container img {
  width: 100%; /* 图片宽度占满figure宽度 */
  height: auto; /* 自动调整图片高度 */
  border-radius: 8px; /* 图片圆角 */
}

.image-container figcaption {
  margin-top: 10px; /* 图片与文字之间的间距 */
  font-size: 16px;
  color: #656a7b;
}
</style>
