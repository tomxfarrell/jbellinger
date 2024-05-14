<template>
  <div class="page">
    <HomeHero />
    <PassionProjects image="logo.png" content="contact content" />

  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import PassionProjects from '@/components/PassionProjects.vue';
import { useMeta } from 'vue-meta'


export default {
  name: 'Contact',
  setup () {
    useMeta({ title: 'Contact' })
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
