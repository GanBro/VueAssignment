<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h1>欢迎来到旅游景点介绍网站</h1>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="8" v-for="site in sites" :key="site.id">
            <el-card shadow="hover">
              <img src="https://img2.baidu.com/it/u=3227619927,365499885&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1718211600&t=d671ccb956f05e6fb83200109e97cae4" alt="tourist site image" class="image"/>
              <div style="padding: 14px;">
                <span>{{ site.name }}</span>
                <div class="bottom clearfix">
                  <el-button type="text" @click="navigateToSite(site.id)">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/AppNavbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['sites']),
  },
  methods: {
    navigateToSite(siteId) {
      this.$router.push(`/site${siteId}`);
    },
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.el-card {
  margin-bottom: 20px;
}
.bottom {
  margin-top: 10px;
  line-height: 12px;
}
</style>
