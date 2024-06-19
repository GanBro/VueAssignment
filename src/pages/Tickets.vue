<template>
  <el-row class="container">
    <el-row class="background">
      <el-card class="custom-card" shadow="hover" style="height: 150px; top: 80px;">
        <div class="card-content">
          票务信息
        </div>
      </el-card>

      <el-card class="custom-card detailed-card" shadow="hover" style="height: 700px; top: 300px;">
        <div class="card-header">
          景区门票价格
        </div>
        <el-row class="cards-container" gutter="20">
          <el-col :span="6" v-for="(card, index) in cards" :key="index">
            <el-card shadow="hover" class="small-card">
              <div class="small-card-header">{{ card.title }}</div>
              <div class="small-card-price">¥{{ card.price }} <span class="small-card-unit">/人</span></div>
              <ul class="small-card-details">
                <li>执行日期：{{ card.startDate }}</li>
                <li>截止日期：{{ card.endDate }}</li>
              </ul>
              <el-button type="primary" class="small-card-button">点击购买</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>

    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'BackgroundComponent',
  data() {
    return {
      cards: [
        {
          title: '旺季门票',
          price: 190,
          startDate: '4月1日起',
          endDate: '11月15日止'
        },
        {
          title: '旺季观光车票',
          price: 90,
          startDate: '4月1日起',
          endDate: '11月15日止'
        },
        {
          title: '淡季门票',
          price: 80,
          startDate: '11月16日起',
          endDate: '次年3月31日止'
        },
        {
          title: '淡季观光车票',
          price: 80,
          startDate: '11月16日起',
          endDate: '次年3月31日止'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 5000px; /* 增加高度以适应多个卡片 */
  position: relative;
}

.background {
  background-color: rgb(255, 116, 40);
  width: 100%; /* 设置宽度 */
  height: 100%; /* 设置高度 */
  position: absolute;
}

.custom-card {
  position: absolute; /* 绝对定位 */
  left: 15%; /* 距离左侧 15%，可以根据需要调整 */
  width: 70%; /* 卡片宽度 */
  background-color: white; /* 卡片背景颜色 */
  border-radius: 10px; /* 卡片圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  display: flex; /* 使用 Flexbox 居中内容 */
  flex-direction: column; /* 垂直排列 */
  justify-content: flex-start; /* 从上方开始排列 */
  align-items: center; /* 垂直居中 */
  text-align: center; /* 文字居中 */
  padding: 20px; /* 内边距 */
}

.card-content {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 59.2px;
  color: rgb(255, 117, 41);
  line-height: 68.08px;
  text-align: center;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
}

.detailed-card .card-header {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 36px;
  color: rgb(0, 0, 0);
  line-height: 54px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  margin-bottom: 20px;
}

.cards-container {
  width: 100%;
}

.small-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  height: 300px; /* 设置卡片高度 */
}

.small-card-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.small-card-price {
  font-size: 24px;
  color: rgb(0, 0, 102);
  margin: 10px 0;
}

.small-card-unit {
  font-size: 16px;
  vertical-align: super;
}

.small-card-details {
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.small-card-details li {
  margin-bottom: 5px;
}

.small-card-button {
  background-color: rgb(255, 117, 41);
  color: white;
  margin-top: 10px;
}
</style>
