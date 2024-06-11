<template>
  <div id="main-navigation" ref="nav">
    <div class="container">
      <div class="main-logo">
        <router-link to="/">
          <img src="../assets/logo-white.svg" alt="Bellinger logo" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li class="link-work"><router-link to="/work"><div class="nav-link-text">Work</div><div class="nav-link-text-reveal" aria-hidden="true">Work</div></router-link></li>
          <li class="link-about"><router-link to="/about"><div class="nav-link-text">About & Resume</div><div class="nav-link-text-reveal" aria-hidden="true">About & Resume</div></router-link></li>
          <li class="link-contact"><router-link to="/contact"><div class="nav-link-text">Contact</div><div class="nav-link-text-reveal" aria-hidden="true">Contact</div></router-link></li>
          <li><a href="http://linkedin.com/in/jasonbellinger" target="_blank" class="linkedin"><img src="../assets/icon-linkedin-2x.png" alt="Linkedin Logo"
                class="linkedin-icon"></a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {
  name: 'MainNavigation',
  setup() {
    const nav = ref(null);

    onMounted(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'bottom top',
        end: 'bottom center',
        onEnter: () => gsap.to(nav.value, { backgroundColor: 'rgba(0, 0, 0, 0.8)', duration: 0.2 }),
        onLeaveBack: () => gsap.to(nav.value, { backgroundColor: 'transparent', duration: 0.2 }),
      });
    });

    onUnmounted(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    });

    return { nav };
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_main-navigation.scss';
</style>