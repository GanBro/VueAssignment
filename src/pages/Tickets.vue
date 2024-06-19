<template>
  <el-row class="container">
    <el-row class="background">
      <el-card class="custom-card" shadow="hover" style="height: 150px; top: 80px;">
        <div class="card-content">
          票务信息
        </div>
      </el-card>

      <el-card class="custom-card detailed-card" shadow="hover" style="height: 500px; top: 240px;">
        <div class="card-header">
          景区门票价格
        </div>

      </el-card>

    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'BackgroundComponent',
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
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  text-align: center; /* 文字居中 */
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
  margin-bottom: 10px;
  margin-top: -220px; /* 添加顶部距离 */
}

.detailed-card .card-price {
  font-size: 48px;
  color: rgb(255, 117, 41);
}

.detailed-card .card-unit {
  font-size: 24px;
  vertical-align: super;
}

.detailed-card .card-details {
  font-size: 16px;
  margin: 10px 0;
}

.detailed-card .card-button {
  background-color: rgb(255, 117, 41);
  color: white;
  margin-top: 20px;
}
</style>
