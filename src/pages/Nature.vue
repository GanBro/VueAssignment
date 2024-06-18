<template>
  <div class="cluture-container">
    <div class="controls">
      <el-form :inline="true" label-position="top">
        <el-form-item label="顶部高度 (px)">
          <el-input-number v-model="topHeight" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="底部高度 (px)">
          <el-input-number v-model="bottomHeight" :min="0"></el-input-number>
        </el-form-item>
      </el-form>
    </div>
    <div class="sections">
      <div class="top-section" :style="{ height: topHeight + 'px' }">
        <!-- 顶部内容 -->
        <h1>顶部内容</h1>
        <p>这里是顶部内容区域。</p>
      </div>
      <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
        <!-- 底部内容 -->
        <h1>底部内容</h1>
        <p>这里是底部内容区域。</p>
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
    };
  },
};
</script>

<style scoped>
.cluture-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto; /* 使容器可以垂直滚动 */
  margin-top: -100px;
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
}

.top-section {
  background-color: rgb(140, 219, 70);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bottom-section {
  background-color: rgb(87, 189, 95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
