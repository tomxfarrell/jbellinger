<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroVersaceDesktop from '@/assets/img/hero-versace-desktop-2x.png';
import heroVersaceMobile from '@/assets/img/hero-versace-mobile-2x.png';

import versaceLaptopDesktop from '@/assets/img/versace-laptop-desktop-2x.png';
import versaceLaptopMobile from '@/assets/img/versace-laptop-mobile-2x.png';

import versaceScreenshotDesktop from '@/assets/img/versace-screenshot-desktop-2x.png';
import versaceScreenshotMobile from '@/assets/img/versace-screenshot-mobile-2x.png';

import versaceHimDesktop from '@/assets/img/versace-him-desktop-2x.png';
import versaceTextDesktop from '@/assets/img/versace-text-desktop-2x.png';

import versaceEmailsDesktop from '@/assets/img/versace-emails-desktop-2x.png';
import versaceEmailsMobile from '@/assets/img/versace-emails-mobile-2x.png';

import versaceEmailPhoneDesktop from '@/assets/img/versace-email-phone-desktop-2x.png';
import versaceEmailPhoneMobile from '@/assets/img/versace-email-phone-mobile-2x.png';
import ImageInline from '@/components/ImageInline.vue';

const overlayText = ref(null);
const container = ref(null);
let ctx;

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      // Dramatic parallax effect for the Jeep image
      gsap.from('.animate-versace-text', {
        x: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '.animate-versace-text',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, container.value);
  });
});

onUnmounted(() => {
  ctx?.revert(); // Essential cleanup to prevent "ghost" scroll triggers
  ScrollTrigger.refresh(); // Recalculate global scroll markers immediately
});
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Versace</h1>
      <h2>Web & Digital Campaigns</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroVersaceDesktop"
      :mobile="heroVersaceMobile"
      alt="Versace"
      className="full-width"
    />

    <ContentBlock>
      <p>
        My collaboration with Versace presented a unique challenge and a
        remarkable opportunity to showcase my creative skills. Versace,
        synonymous with luxury and sophistication, sought e-blast and microsite
        designs that could seamlessly mirror the opulence of their products and
        resonate with their discerning clientele. To meet this challenge, I
        embarked on a meticulous design journey, crafting visuals and layouts
        that exuded elegance while maintaining a user-friendly interface.
      </p>
      <p>
        The results of the e-marketing campaign with Versace were nothing short
        of remarkable. The 500% increase in email subscriptions underscored the
        effectiveness of our designs in capturing the interest of a wider
        audience. This surge in subscribers not only expanded Versace’s reach
        but also translated into a substantial ROI, demonstrating the tangible
        impact of my design work on the brand’s growth and profitability.
        Ultimately, our collaboration with Versace was a testament to my ability
        to combine aesthetic excellence with measurable success, forging a
        stronger bond between the brand and its loyal clientele.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="versaceLaptopDesktop"
      :mobile="versaceLaptopMobile"
      alt="Versace Laptop"
      className="full-width mb-lg"
    />

    <ContentBlock>
      <h2 class="text-center">
        An incredible opportunity to design for a truly iconic brand.
      </h2>
    </ContentBlock>

    <ImageBlock
      :desktop="versaceScreenshotDesktop"
      :mobile="versaceScreenshotDesktop"
      alt="Versace Screenshot"
      className="mw-1440 mb-20 versace-animation"
    >
      <ImageInline
        :desktop="versaceHimDesktop"
        :mobile="versaceHimDesktop"
        alt="Versace Him"
        className="versace-him-image"
      />
      <div class="overlay-content" ref="overlayText">
        <ImageInline
          :desktop="versaceTextDesktop"
          :mobile="versaceTextDesktop"
          alt="Versace Text"
          className="versace-text animate-versace-text"
        />
      </div>
    </ImageBlock>

    <ImageBlock
      :desktop="versaceEmailsDesktop"
      :mobile="versaceEmailsMobile"
      alt="Versace Emails"
      className="full-width"
    />

    <ImageBlock
      :desktop="versaceEmailPhoneDesktop"
      :mobile="versaceEmailPhoneMobile"
      alt="Versace Email"
      className="mw-1300"
    />

    <NextProject link="/work/stockeld-dreamery" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.versace-animation {
  overflow: hidden;
}
.versace-him-image {
  margin: 0 auto;
  position: absolute;
  // top: 19.5%;
  top: clamp(10%, 19.5%, 19.5%);
  // left: 17%;
  left: clamp(5%, 17%, 17%);
  z-index: 500;

  :deep(img) {
    // max-width: 318px;
    width: clamp(180px, 22vw, 318px);
  }
}

.versace-text {
  margin: 0 auto;
  position: absolute;
  // top: 22.5%;
  top: clamp(15%, 22.5%, 22.5%);
  right: 0;
  z-index: 400;

  :deep(img) {
    // max-width: 800px;
    width: clamp(350px, 55vw, 800px);
  }
}

@media (max-width: 700px) {
  .versace-him-image {
    :deep(img) {
      width: 25vw;
    }
  }

  .versace-text {
    right: 10%;
    :deep(img) {
      width: 55vw;
    }
  }
}
// @media (max-width: $breakpoint-sm) {

// }
</style>
