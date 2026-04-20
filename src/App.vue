<script setup>
import { RouterView, useRoute } from 'vue-router';
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Register the plugin immediately so the core is initialized
gsap.registerPlugin(ScrollTrigger);

// 1. Global fix: Prevent the browser from fighting GSAP's scroll management.
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

ScrollTrigger.config({
  ignoreMobileResize: true, // Prevents jumps when mobile address bar toggles
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
});

const route = useRoute();

const onEnter = async (el, done) => {
  // 0. Hide the element IMMEDIATELY.
  // This prevents the browser from painting the raw page while we wait for the awaits below.
  gsap.set(el, { opacity: 0, visibility: 'hidden' });

  // 2. Identify critical images at the top of the page (e.g., Hero images)
  const criticalImages = Array.from(el.querySelectorAll('img')).slice(0, 3);

  // 3. Wait for critical images to load AND decode before revealing the page
  const imagePromises = criticalImages.map((img) => {
    return new Promise((resolve) => {
      const finalize = () => {
        // Use decode() to ensure the image is fully ready to be painted
        if (img.decode) {
          img.decode().then(resolve).catch(resolve);
        } else {
          resolve();
        }
      };
      if (img.complete) return finalize();
      img.onload = finalize;
      img.onerror = resolve; // Continue even if one image fails
    });
  });

  await Promise.all(imagePromises);

  // 4. Force a scroll reset and clear GSAP memory right before we reveal the content
  window.scrollTo(0, 0);
  ScrollTrigger.clearScrollMemory();
  ScrollTrigger.refresh();

  // 4. Add a tiny buffer (150ms) to allow the browser to settle the paint
  await new Promise((resolve) => setTimeout(resolve, 150));

  gsap.fromTo(
    el,
    {
      opacity: 0,
      visibility: 'visible',
      y: 30,
      scale: 0.98,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
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

  <RouterView v-slot="{ Component }">
    <transition mode="out-in" :css="false" @enter="onEnter" @leave="onLeave">
      <!-- Wrap component and footer together so height never collapses to zero -->
      <div :key="route.path" class="wrapper">
        <component :is="Component" />
        <Footer />
      </div>
    </transition>
  </RouterView>
</template>

<style lang="scss">
// Global Scroll Performance & Stability Fixes
html,
body {
  min-height: 100%;
  height: auto;
  scroll-behavior: auto !important;

  // Essential: Stops the browser from "correcting" scroll position during transitions
  overflow-anchor: none !important;
}
</style>
