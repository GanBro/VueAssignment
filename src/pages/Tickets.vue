<!-- Tickets.vue -->
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

      <!-- 底栏 -->
      <el-footer class="footer">
        <div class="footer-icons">
          <img src="@/assets/footer/1.png" alt="World Natural Heritage" />
        </div>
        <div class="footer-content">
          <p>© 2002 - 2024 九寨沟风景名胜区管理局 蜀ICP备15014791号 | 技术支持[云竹软件&智慧旅游]</p>
          <p>不良与违法信息举报电话：0837-7799309，举报邮箱：admin@jiuzhai.com</p>
          <p>中国互联网举报中心 四川省互联网举报中心</p>
        </div>
        <div class="footer-icons">
          <font-awesome-icon icon="fa-brands fa-weixin" class="icon" />
          <font-awesome-icon icon="fa-brands fa-qq" class="icon" />
          <font-awesome-icon icon="fa-brands fa-weibo" class="icon" />
          <font-awesome-icon icon="fa-brands fa-facebook" class="icon" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
        </div>
        <p class="back-to-top">^ 顶部</p>
      </el-footer>
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
  height: 1700px; /* 增加高度以适应底栏 */
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
}

.price {
  font-size: 50px;
}

.unit {
  font-size: 30px;
}

.small-card-details {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card-detail {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 22.4px;
  color: rgb(86, 99, 136);
  line-height: 33.6px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  margin-top: 10px;
}

.small-card-button {
  background-color: rgb(255, 116, 40);
  font-size: 20px;
  width: 80%;
  margin: 0 auto 10px auto;
}

/* 公告卡片样式 */
.card-content1 {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 40px;
  color: rgb(255, 117, 41);
  line-height: 68.08px;
  text-align: center;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
}

.card-body {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 24px;
  color: rgb(0, 0, 0);
  line-height: 54px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  margin-top: 20px;
}

.announcement-text {
  margin-bottom: 10px;
}

.announcement-link {
  color: rgb(255, 116, 40);
  text-decoration: none;
}

.announcement-link:hover {
  text-decoration: underline;
}

/* 底栏样式 */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  bottom: 0;
  position: absolute; /* 固定在页面底部 */
  left: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.footer-icons img {
  margin: 0 10px;
}

.footer-icons .icon {
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
}

.footer-content p {
  margin: 5px 0;
}

.back-to-top {
  margin-top: 10px;
  cursor: pointer;
}

.back-to-top:hover {
  text-decoration: underline;
}
</style>
