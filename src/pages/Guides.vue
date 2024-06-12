<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>旅游攻略</h2>
      </el-header>
      <el-main>
        <!-- 添加旅游攻略的内容 -->
        <p>这里是旅游攻略的内容。</p>
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
