<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';


</script>

<template>
 
  <MainNavigation />

  <div class="wrapper">
      <RouterView />
  </div>

  <Footer />
</template>


