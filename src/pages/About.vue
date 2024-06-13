<template>
  <div class="about-page">
    <div class="about-container">
      <div class="left-pane">
        <!-- 左侧内容 -->
        <p>dsfasdf </p>
      </div>
      <div class="right-pane">
        <!-- 右侧内容 -->
      </div>
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 60px; /* 确保内容不会被导航栏覆盖 */
}

.about-container {
  display: flex;
  flex: 1;
}

.left-pane {
  flex: 1;
  background-color: rgb(126, 202, 186);
  height: 100%;
}

.right-pane {
  flex: 1;
  background-color: rgb(226, 252, 203);
  height: 100%;
}
</style>
