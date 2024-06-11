<template>
  <div>
    <Navbar />
    <site-card :site="site2" />
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
    site2() {
      return this.getSiteById(2);
    },
  },
};
</script>
