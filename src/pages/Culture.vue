<template>
  <el-row class="container">
    <el-col :span="12" class="left"></el-col>
    <el-col :span="12" class="right"></el-col>
    <el-card class="absolute-card" shadow="always">
      <div class="card-header">
        九寨文艺
      </div>
      <el-row class="card-body">
        <el-col :span="12" class="card-left">
          <!-- 左侧内容 -->
          <p>左侧内容示例</p>
        </el-col>
        <el-col :span="12" class="card-right">
          <!-- 右侧内容 -->
          <p>右侧内容示例</p>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: 'Culture',
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 5000px; /* 增加高度以适应多个卡片 */
  position: relative;
}
.left {
  background-color: rgb(126, 202, 186);
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}

.right {
  background-color: rgb(226, 252, 203);
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}

.absolute-card {
  position: absolute;
  top: 70px; /* 调整为你需要的位置 */
  left: 50%;
  transform: translateX(-50%);
  width: 70%; /* 设置卡片宽度 */
  height: 800px; /* 设置卡片高度 */
  background-color: white;
}

.card-header {
  font-family: 'quando', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 36px;
  color: #656a7b;
  background-color: rgba(0, 0, 0, 0);
  line-height: 54px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(101, 106, 123);
  text-align: center; /* 添加文本居中对齐 */
  margin: 50px; /* 清除默认的边距 */
}

.card-body {
  display: flex;
  width: 100%;
  height: 100%;
}

.card-left {
  background-color: #f5f5f5;
  padding: 20px;
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}

.card-right {
  background-color: #ffffff;
  padding: 20px;
  height: 100%;
  overflow-y: auto; /* 允许垂直滚动 */
}
</style>
