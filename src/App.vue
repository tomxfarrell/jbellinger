<script setup>
import { RouterView, useRoute } from 'vue-router';
import MainNavigation from '@/components/MainNavigation.vue';
import Footer from '@/components/Footer.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const route = useRoute();

const onEnter = async (el, done) => {
  // 0. Hide the element IMMEDIATELY.
  // This prevents the browser from painting the raw page while we wait for the awaits below.
  gsap.set(el, { opacity: 0, visibility: 'hidden' });

  // 1. Force a scroll reset for safety
  window.scrollTo(0, 0);

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

  <div class="wrapper">
    <RouterView v-slot="{ Component }">
      <transition mode="out-in" :css="false" @enter="onEnter" @leave="onLeave">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>

  <Footer />
</template>
