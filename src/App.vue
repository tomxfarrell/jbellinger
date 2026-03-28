<script setup>
import { RouterView, useRoute } from 'vue-router';
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const route = useRoute();

const onEnter = (el, done) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 30, scale: 0.98, filter: 'blur(10px)' },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'expo.out',
      clearProps: 'all',
      onComplete: () => {
        ScrollTrigger.refresh();
        done();
      },
    }
  );
};

const onLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -30,
    scale: 1.02,
    filter: 'blur(10px)',
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: done,
  });
};
</script>

<template>
  <MainNavigation />

  <div class="wrapper">
    <RouterView v-slot="{ Component }">
      <transition mode="out-in" :css="false" @enter="onEnter" @leave="onLeave">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>

  <Footer />
</template>
