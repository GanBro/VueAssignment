<template>
  <div>
    <Navbar />
    <site-card :site="site3" />
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
    site3() {
      return this.getSiteById(3);
    },
  },
};
</script>
