<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroMagentaBG from '@/assets/img/hero-magenta-therapeutics-bg-desktop-2x.png';
import heroMagentaFG from '@/assets/img/hero-magenta-therapeutics-fg-desktop-2x.png';
import heroMagentaTxt from '@/assets/img/hero-magenta-therapeutics-txt-desktop-2x.png';

import heroMagentaBGMobile from '@/assets/img/hero-magenta-therapeutics-bg-mobile-2x.png';
import heroMagentaFGMobile from '@/assets/img/hero-magenta-therapeutics-fg-mobile-2x.png';
import heroMagentaTxtMobile from '@/assets/img/hero-magenta-therapeutics-txt-mobile-2x.png';

import magentaComputerDesktop from '@/assets/img/magenta-computer-desktop-2x.png';
import magentaComputerMobile from '@/assets/img/magenta-computer-mobile-2x.png';

import magentaScreensDesktop from '@/assets/img/magenta-screens-desktop-2x.png';
import magentaScreensMobile from '@/assets/img/magenta-screens-mobile-2x.png';

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
let ctx;

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      // Subtle parallax for the foreground and text layers to create depth
      gsap.from('.hero-fg', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-parallax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from('.hero-txt', {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-parallax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, container.value);
  });
});

onUnmounted(() => {
  ctx?.revert(); // Essential cleanup
  ScrollTrigger.refresh();
});
</script>

<template>
  <div class="work-page" ref="container">
    <HeadlineBlock>
      <h1>Magenta Therapeutics</h1>
      <h2>Corporate Website</h2>
    </HeadlineBlock>

    <div class="hero-parallax full-width">
      <picture class="hero-bg">
        <source :srcset="heroMagentaBGMobile" media="(max-width: 767px)" />
        <img :src="heroMagentaBG" alt="" />
      </picture>
      <picture class="hero-txt">
        <source :srcset="heroMagentaTxtMobile" media="(max-width: 767px)" />
        <img
          :src="heroMagentaTxt"
          alt="Magenta Therapeutics Corporate Website"
        />
      </picture>
      <picture class="hero-fg">
        <source :srcset="heroMagentaFGMobile" media="(max-width: 767px)" />
        <img :src="heroMagentaFG" alt="" />
      </picture>
    </div>

    <ContentBlock>
      <p>
        As the Associate Creative Director responsible for the Magenta
        Therapeutics’ corporate website design, I led a transformative project
        that included innovative mobile design enhancements. One standout
        feature was relocating conventional mobile menu button to the bottom of
        the screen, a concept I like to refer to as “thumbable,” guaranteeing
        effortless, reachable accessibility for users as they made their
        selections. This innovative approach not only enhanced the overall user
        experience but also underscored our unwavering dedication to
        user-centric design principles
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="magentaComputerDesktop"
      :mobile="magentaComputerMobile"
      alt="Magenta Therapeutics"
      className="full-width"
    />

    <ImageBlock
      :desktop="magentaScreensDesktop"
      :mobile="magentaScreensMobile"
      alt="Magenta"
      className="full-width"
    />

    <NextProject link="/work/diabetic-pain" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.hero-parallax {
  position: relative;
  width: 100%;
  // min-height: 600px;
  overflow: hidden;
  line-height: 0;
  text-align: center;
  margin-bottom: 60px;

  picture,
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .hero-bg {
    position: relative;
    z-index: 1;
  }

  .hero-fg,
  .hero-txt {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .hero-txt {
    z-index: 2;
    width: 60%;
    top: 5vw;

    @media (max-width: $breakpoint-sm) {
      width: 100%;
      top: 55vw;
    }
  }

  .hero-fg {
    z-index: 3;
    @media (max-width: $breakpoint-sm) {
      width: 100%; // Adjust this percentage to make the foreground image smaller on mobile
      top: 65vw;
    }
  }
}
</style>
