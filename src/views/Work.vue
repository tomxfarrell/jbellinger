<template>
  <div class="page">
    <HomeHero />
    <PassionProjects image="logo.png" content="work content" />

  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import PassionProjects from '@/components/PassionProjects.vue';

export default {
  name: 'Work',
  components: {
    HomeHero,
    PassionProjects
  }
};
</script>

<style scoped>
/* Page-specific styles */
</style>
