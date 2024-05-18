<template>
    <section class="hero home-hero" ref="hero">
      <img src="../assets/txt-hero.svg" alt="" class="txt-hero" ref="txtHero">
      <div class="bg-gradient" ref="bgGradient">
        <p>Design is not just my profession; it's my passion, my very essence. I live and breathe design, and it permeates every aspect of my life. My mind constantly wanders, exploring new ideas, concepts, and possibilities. I find myself unable to turn my brain off, always seeking inspiration from the world around me. As an award-winning designer, I've had the privilege of working for top agencies across New York, where I've crafted everything from sleek websites to captivating campaigns to all immersive experiential events, aiming to engage, inspire, and react.</p>
        <p class="callout">Design isn't just what I do—it's who I am, and I pour my heart and soul into every project I undertake.</p>
      </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {
  name: 'HomeHero',
  setup() {
    const hero = ref(null);
    const txtHero = ref(null);
    const bgGradient = ref(null);

    onMounted(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero.value,
          start: "top top",
          end: `+=${hero.value.clientHeight}`,
          markers: false,
          scrub: true,
          pin: true,
          immediateRender: false,
          anticipatePin: true
        }
      });

      timeline
      .to(txtHero.value, {
        scale: 75,
        rotate: "-1deg",
        
        duration: .15,
        ease: "power1.inOut"
      })
      
      
      .from(bgGradient.value, {
        opacity: 0,
        duration: .25,
        ease: "power1.in"
      }, ">")
      .to(txtHero.value, {
        
        opacity: 0,
        duration: .15,
        ease: "power1.inOut"
      }, ">")
      .to(txtHero.value, {
        display: 'none'
      }, ">");
    });

    onUnmounted(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    });

    return { hero, txtHero, bgGradient };
  }

};
</script>

<style lang="scss" scoped>
  @import '../../styles/_home-hero.scss';
</style>