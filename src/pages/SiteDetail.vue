<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>
        <h2>{{ site.name }}</h2>
      </el-header>
      <el-main>
        <site-card :site="site" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/AppNavbar.vue';
import SiteCard from '@/components/SiteCard.vue';

export default {
  components: {
    Navbar,
    SiteCard,
  },
  computed: {
    ...mapGetters(['getSiteById']),
    site() {
      return this.getSiteById(parseInt(this.$route.params.id));
    },
  },
};
</script>
