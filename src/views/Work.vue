<template>
  <div class="page">
    <HomeHero />
    <PassionProjects image="logo.png" content="work content" />

  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import PassionProjects from '@/components/PassionProjects.vue';
import { useMeta } from 'vue-meta'

export default {
  name: 'Work',
  setup () {
    useMeta({ title: 'Work' })
  },
  components: {
    HomeHero,
    PassionProjects
  }
};
</script>

<style scoped>
/* Page-specific styles */
</style>
