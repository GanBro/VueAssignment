<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ site.name }}</span>
    </div>
    <div v-bind:class="descriptionClass">{{ site.description }}</div>
  </el-card>
</template>

<script>
export default {
  props: {
    site: Object,
  },
  computed: {
    descriptionClass() {
      return {
        'site-description': true,
      };
    },
  },
};
</script>

<style scoped>
.site-description {
  font-size: 14px;
}
</style>
