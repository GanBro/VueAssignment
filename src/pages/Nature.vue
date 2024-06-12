<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>活动资讯</h2>
      </el-header>
      <el-main>
        <!-- 添加活动资讯的内容 -->
        <p>这里是活动资讯的内容。</p>
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
