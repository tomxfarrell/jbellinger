<template>
  <div class="page">
    <HomeHero />
    <PassionProjects image="icon-linkedin-2x.png" content="Example content" />

  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import PassionProjects from '@/components/PassionProjects.vue';
import { useMeta } from 'vue-meta'


export default {
  name: 'Home',
  setup () {
    useMeta({ title: 'Home' })
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
