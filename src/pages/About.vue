<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>关于我们/联系我们</h2>
      </el-header>
      <el-main>
        <!-- 添加关于我们/联系我们的内容 -->
        <p>这里是关于我们/联系我们的内容。</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
