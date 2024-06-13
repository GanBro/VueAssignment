<template>
  <div class="about-page">
    <div class="about-container">
      <div class="left-pane">
<!--        <p>左侧内容</p>-->
      </div>
      <div class="right-pane">
<!--        <p>右侧内容</p>-->
      </div>
    </div>
    <div class="center-card1">
      <el-card class="box-card">
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
    <!-- 新增的卡片 -->
    <div class="center-card2">
      <el-card class="box-card">
        <div class="card-content">
          <p class="title">九寨沟景点介绍</p>
          <div class="body-content">
            <!-- 正文内容 -->
            <p>九寨沟的景点丰富多样，包括珍珠滩瀑布、五花海、长海和诺日朗瀑布等。</p>
            <p>珍珠滩瀑布是九寨沟的著名景点之一，其水流经过浅滩时溅起水花，犹如珍珠般闪亮。</p>
            <p>五花海以其绚丽多彩的湖水著称，湖水在不同深度和光照下呈现出不同的色彩。</p>

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
  height: 2200px; /* 左右面板高度 */
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

.center-card1, .center-card2 {
  position: absolute; /* 使用绝对定位 */
  left: 50%; /* 固定的左侧位置 */
  transform: translateX(-50%); /* 使卡片水平居中 */
  z-index: 10; /* 确保卡片在最上层 */
}

.center-card1 {
  top: 50px; /* 固定的顶部位置 */
}

.center-card2 {
  top: 1000px; /* 固定的顶部位置 */
}

.box-card {
  width: 1100px; /* 卡片宽度 */
  height: 700px; /* 卡片高度 */
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
  text-align: center; /* 文本居中对齐 */
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
