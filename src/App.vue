<template>
  <div id="app">
    <MainNavigation />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
    FooterSection
  }
};
</script>

<style>
/* Global styles */
</style>
