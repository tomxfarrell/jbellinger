<template>
  <div class="page">
    <AboutHero />
    <PassionProjects image="logo.png" content="about content" />
    <Resume />
  </div>
</template>

<script>
import AboutHero from '@/components/About/AboutHero.vue';
import Resume from '@/components/About/Resume.vue';
import { useMeta } from 'vue-meta'

export default {
  name: 'About',
  setup () {
    useMeta({ title: 'About' })
  },
  components: {
    AboutHero,
    Resume
  }
};
</script>

<style scoped>
/* Page-specific styles */
</style>
