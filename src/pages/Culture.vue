<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>历史介绍</h2>
      </el-header>
      <el-main>
        <!-- 添加历史介绍的内容 -->
        <p>这里是历史介绍的内容。</p>
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
