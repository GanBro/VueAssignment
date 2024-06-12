<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>传统节日</h2>
      </el-header>
      <el-main>
        <p>这里是传统节日的内容。</p>
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
