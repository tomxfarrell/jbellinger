
<template>
  <div id="app">
    <metainfo />
    <MainNavigation />
    <router-view />
    <FooterSection />
  </div>
</template>


<script>
import MainNavigation from '@/components/MainNavigation.vue';
import FooterSection from '@/components/FooterSection.vue';
import { useMeta } from 'vue-meta';

export default {
  name: 'App',
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  components: {
    MainNavigation,
    FooterSection
  }
};
</script>

<style>
/* Global styles */
</style>
