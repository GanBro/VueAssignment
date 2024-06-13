<template>
  <div class="about-page">
    <div class="about-container">
      <div class="left-pane">
        <!-- 左侧内容 -->
        <p>左侧内容</p>
      </div>
      <div class="right-pane">
        <!-- 右侧内容 -->
        <p>右侧内容</p>
      </div>
    </div>
    <div class="center-card1">
      <el-card class="box-card">
        <div class="card-content">
          <p class="title">九寨沟简介</p>
          <div class="body-content">
            <!-- 正文内容 -->
            <p>九寨沟位于四川省阿坝藏族羌族自治州九寨沟县境内，以其多彩的湖泊、瀑布、雪山和原始森林而闻名。九寨沟因沟内有九个藏族村寨而得名。这里的自然景观独特，拥有翠海、叠瀑、彩林、雪峰、藏情、蓝冰六绝，被誉为“人间仙境”。</p>
            <p>九寨沟是世界自然遗产，国家重点风景名胜区，国家AAAAA级旅游景区，被誉为“童话世界”。九寨沟的水、林、山、洞四位一体，互为映衬，构成了一幅幅美丽的图画。</p>
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

.center-card1 {
  position: absolute; /* 使用绝对定位 */
  top: 50%; /* 固定的顶部位置 */
  left: 50%; /* 固定的左侧位置 */
  transform: translate(-50%, -50%); /* 使卡片在垂直和水平方向上居中 */
  z-index: 10; /* 确保卡片在最上层 */
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
  font-size: 48px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
  text-align: center; /* 文字居中 */
  margin-bottom: 20px; /* 标题下方留出空间 */
}

.body-content {
  text-align: left; /* 正文左对齐 */
  font-size: 16px; /* 设置正文字体大小 */
  line-height: 1.5; /* 设置行高 */
  width: 100%; /* 内容占满宽度 */
  padding-left: 20px; /* 增加正文左边距 */
  padding-right: 20px; /* 增加正文右边距 */
}

.body-content p {
  text-indent: 2em; /* 首行缩进两格 */
  margin: 0 0 10px; /* 段落间距 */
}
</style>
