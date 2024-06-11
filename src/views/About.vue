<template>
  <div class="page">
    <StaticHero class="about-hero" />
    <Bio />
    <Testimonials />
    <Resume />
  </div>
</template>

<script>
import StaticHero from '@/components/StaticHero.vue';
import Bio from '@/components/About/Bio.vue';
import Testimonials from '@/components/About/Testimonials.vue';
import Resume from '@/components/About/Resume.vue';

import { useMeta } from 'vue-meta'

export default {
  name: 'About',
  setup () {
    useMeta({ title: 'About' })
  },
  components: {
    StaticHero,
    Resume,
    Bio,
    Testimonials
  }
};
</script>

<style lang="scss">

/* Page-specific styles */
.about-hero {
  background-color: $black; 
  padding: 50px;
  text-align: center;
  background-image: url(../assets/bg-about-2x.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
}

</style>
