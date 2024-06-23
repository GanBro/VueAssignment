<!-- AppFooter.vue -->
<template>
  <el-footer class="footer">
    <div class="footer-icons">
      <img src="@/assets/footer/1.png" alt="World Natural Heritage" />
    </div>
    <div class="footer-content">
      <p>© 2002 - 2024 九寨沟风景名胜区管理局 蜀ICP备15014791号 | 技术支持[吴波]</p>
      <p>不良与违法信息举报电话：15884929619，举报邮箱：2551921037@qq.com</p>
      <div class="footer-last-line">
        <p class="report-center">中国互联网举报中心 成都理工大学工程技术学院互联网举报中心</p>
        <div class="footer-icons-right">
          <font-awesome-icon icon="fa-brands fa-weixin" class="icon" @click="openWeChat" />
          <font-awesome-icon icon="fa-brands fa-qq" class="icon" @click="openQQ" />
          <font-awesome-icon icon="fa-brands fa-weibo" class="icon" />
          <font-awesome-icon icon="fa-brands fa-facebook" class="icon" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
        </div>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    openWeChat() {
      // const weChatQrCodeUrl = 'https://u.wechat.com/MIy2TFA0wfao0LykuanKzqM';
      const weChatQrCodeUrl = 'https://qm.qq.com/q/7jiyQYlNGo';
      window.open(weChatQrCodeUrl, '_blank');
    },
    openQQ() {
      window.open(`https://qm.qq.com/q/7jiyQYlNGo`, '_blank');
    }
  }
};
</script>




<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  left: 0;
  height: 260px; /* 根据实际需要调整高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  text-align: center;
  width: 100%; /* Ensure it takes full width */
}

.footer-last-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Ensure it takes full width */
  text-align: center;
}

.footer-last-line p {
  flex: 1; /* Take available space */
  margin-top: 10px;
  margin-left: 320px; /* Adjust the margin-left to move text to the right */
}

.footer-icons-right {
  display: flex;
  justify-content: flex-end; /* Align to the right */
  gap: 20px; /* Add some space between the icons */
  margin-right: 20px; /* Right margin */
}

.icon {
  font-size: 40px; /* Increase the size of the icons */
  color: #fff; /* Ensure the icons are white to match the footer */
  transition: transform 0.3s; /* Smooth transition for hover effect */
}

.icon:hover {
  transform: scale(1.2); /* Slightly enlarge the icon on hover */
}
</style>
