<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>游客互动</h2>
      </el-header>
      <el-main>
        <!-- 添加游客互动的内容 -->
        <p>这里是游客互动的内容。</p>
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
