<!-- Tickets.vue -->
<template>
  <el-row class="container">
    <el-row class="background">
      <el-card class="custom-card" shadow="hover" style="height: 150px; top: 100px;">
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
  height: 1600px; /* 调整页面高度以适应底栏和其他内容 */
  position: relative;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  left: 0;
  height: 300px; /* 根据实际需要调整高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.background {
  background-color: rgb(255, 116, 40);
  width: 100%; /* Set width */
  height: 100%; /* Set height */
  position: absolute;
}

.custom-card {
  position: absolute; /* Absolute positioning */
  left: 13.5%;
  width: 75%;
  background-color: white; /* Card background color */
  border-radius: 10px; /* Card border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Card shadow */
  display: flex; /* Flexbox for centering content */
  flex-direction: column; /* Vertical layout */
  justify-content: flex-start; /* Start from top */
  align-items: center; /* Vertical centering */
  padding: 20px; /* Padding */
}

.custom-card1 {
  align-items: flex-start; /* Left-aligned */
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

.detailed-card {
  position: absolute; /* Absolute positioning */
  top: 100px; /* Adjusted top position */
  left: 13.5%; /* Same left position as other cards */
  width: 75%; /* Same width as other cards */
  height: 550px; /* Fixed height as per requirement */
  background-color: white; /* Card background color */
  border-radius: 10px; /* Card border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Card shadow */
  display: flex; /* Flexbox for centering content */
  flex-direction: column; /* Vertical layout */
  justify-content: flex-start; /* Start from top */
  align-items: center; /* Vertical centering */
  padding: 20px; /* Padding */
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
  height: 350px; /* Card height */
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
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertical layout */
  align-items: center; /* Center align */
}

.small-card-price .price {
  margin-bottom: -50px; /* Spacing between price and unit */
}

.small-card-price .unit {
  font-size: 22.4px; /* Adjust unit font size */
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
  background-color: rgb(255, 255, 255); /* White background on hover */
  color: rgb(0, 0, 0); /* Black text on hover */
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
  text-align: left; /* Left align */
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
  text-indent: 2em; /* First line indentation */
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
  text-indent: 0; /* No indentation */
  margin-top: 70px; /* Top margin */
  text-align: left; /* Left align */
  cursor: pointer;
}
</style>