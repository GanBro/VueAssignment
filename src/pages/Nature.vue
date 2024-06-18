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
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400&display=swap');

.cluture-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto; /* 使容器可以垂直滚动 */
}

.controls {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #f0f0f0;
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
</style>
