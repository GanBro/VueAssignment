<template>
  <el-row class="container">
    <el-row class="background">
      <el-card class="custom-card" shadow="hover" style="height: 150px; top: 80px;">
        <div class="card-content">
          票务信息
        </div>
      </el-card>

      <el-card class="custom-card detailed-card" shadow="hover" style="height: 550px; top: 300px;">
        <div class="card-header">
          景区门票价格
        </div>
        <el-row class="cards-container" gutter="20">
          <el-col :span="6" v-for="(card, index) in cards" :key="index">
            <el-card shadow="hover" class="small-card">
              <div class="small-card-header">{{ card.title }}</div>
              <div class="small-card-price">
                <span class="price">{{ card.price }}</span>
                <span class="unit">/人</span>
              </div>
              <ul class="small-card-details">
                <li class="card-detail">{{ card.startDate }}</li>
                <li class="card-detail">{{ card.endDate }}</li>
              </ul>
              <el-button type="primary" class="small-card-button">点击购买</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="custom-card custom-card1" shadow="hover" style="height: 320px; top: 910px;">
        <div class="card-content1">
          票务公告
        </div>
        <div class="card-body">
          <p class="announcement-text">九寨沟景区灾后恢复重建已全面完成，景区于9月28日恢复全域开放。结合《旅游景区恢复开放疫情防控措施指南（2021年3月修订版）》的相关规定，从即日起，旅游接待人数由原来的每日30000人次调整至每日41000人次。游客朋友请提前做好出行规划，关注阿坝旅游网（www.abatour.com）了解假日期间景区门票预约和旅游接待等信息，并提前一天在该网站进行实名制预约购票，景区现场不设购票窗口，未预约购买门票将无法入园游览，请勿盲目前往。</p>
          <p class="announcement-text">疫情防控期间，请备好有效身份证件和健康码，按照疫情防控有关规定主动出示相关证件。游客全程必须佩戴口罩，服从景区检测点进行体温检测。对未持身份证件和未按规定戴口罩的游客，景区将按照疫情防控期间相关规定，拒绝办理入园手续。</p>
          <router-link to="/announcement" class="announcement-link">点击进入公告</router-link>
        </div>
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
          price: '¥190',
          startDate: '执行日期：4月1日起',
          endDate: '截止日期：11月15日止'
        },
        {
          title: '旺季观光车票',
          price: '¥90',
          startDate: '执行日期：4月1日起',
          endDate: '截止日期：11月15日止'
        },
        {
          title: '淡季门票',
          price: '¥80',
          startDate: '执行日期：11月16日起',
          endDate: '截止日期：次年3月31日止'
        },
        {
          title: '淡季观光车票',
          price: '¥80',
          startDate: '执行日期：11月16日起',
          endDate: '截止日期：次年3月31日止'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 1300px; /* 增加高度以适应多个卡片 */
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
  left: 13.5%;
  width: 75%;
  background-color: white; /* 卡片背景颜色 */
  border-radius: 10px; /* 卡片圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  display: flex; /* 使用 Flexbox 居中内容 */
  flex-direction: column; /* 垂直排列 */
  justify-content: flex-start; /* 从上方开始排列 */
  align-items: center; /* 垂直居中 */
  padding: 20px; /* 内边距 */
}

.custom-card1 {
  align-items: flex-start; /* 左对齐 */
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
  font-size: 50px;
  color: rgb(0, 0, 0);
  line-height: 54px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  margin: 30px auto 50px auto;
}

.cards-container {
  width: 100%;
}

.small-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  height: 350px; /* 设置卡片高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.small-card-header {
  font-family: 'nexa', sans-serif;
  font-size: 25.4px;
  color: rgb(86, 99, 136);
  line-height: 1.2;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 10px;
}

.small-card-price {
  font-family: 'domine', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 65.6px;
  color: rgb(86, 99, 136);
  line-height: 98.4px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 居中 */
}

.small-card-price .price {
  margin-bottom: -50px; /* 价格和单位之间的距离 */
}

.small-card-price .unit {
  font-size: 22.4px; /* 确保单位字体大小合适 */
}

.small-card-unit {
  font-family: 'nexa', sans-serif;
  font-size: 22.4px;
  color: rgb(86, 99, 136);
  line-height: 11.2px; /* 根据你的描述可能这个值太小，适当调整 */
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  display: block; /* 强制换行 */
}

.small-card-details {
  list-style: none;
  padding: 0;
  margin: -10px 0;
}

.small-card-details li {
  font-family: 'nexa', sans-serif;
  font-size: 14.4px;
  color: rgb(86, 99, 136);
  line-height: 21.6px;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  margin-bottom: 5px;
}

.small-card-button {
  background-color: rgb(86, 99, 136);
  color: rgb(255, 136, 60);
  margin-top: 30px;
  height: 40px;
}

.small-card-button:hover {
  background-color: rgb(255, 255, 255); /* 背景变为白色 */
  color: rgb(0, 0, 0); /* 字体变为黑色 */
}

.card-content1 {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 24px;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  line-height: 36px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-align: left; /* 对齐方式改为左对齐 */
  text-indent: 0px;
}

.card-body {
  padding: 20px;
}

.announcement-text {
  font-family: 'quando',
  sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 17.92px;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  line-height: 26.88px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-indent: 2em; /* 首行缩进 */
}

.announcement-link {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 15.92px;
  color: rgb(255, 72, 0);
  background-color: rgba(0, 0, 0, 0);
  line-height: 26.88px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-indent: 0; /* 无首行缩进 */
  margin-top: 70px; /* 增加与上方内容的距离 */
  text-align: left; /* 左对齐 */
  cursor: pointer;
}
</style>
