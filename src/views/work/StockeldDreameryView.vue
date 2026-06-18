<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroStockeldDreameryDesktop from '@/assets/img/hero-stockeld-dreamery-desktop-2x.png';
import heroStockeldDreameryMobile from '@/assets/img/hero-stockeld-dreamery-mobile-2x.png';

import stockeldAframeDesktop from '@/assets/img/stockeld-aframe-desktop-2x.png';
import stockeldAframeMobile from '@/assets/img/stockeld-aframe-mobile-2x.png';

import stockeldBagelAdDesktop from '@/assets/img/stockeld-bagel-ad-desktop-2x.png';
import stockeldBagelAdMobile from '@/assets/img/stockeld-bagel-ad-mobile-2x.png';

import stockeldFlyerDesktop from '@/assets/img/stockeld-flyer-desktop-2x.png';
import stockeldFlyerMobile from '@/assets/img/stockeld-flyer-mobile-2x.png';

import stockeldBrochureDesktop from '@/assets/img/stockeld-brochure-desktop-2x.png';
import stockeldBrochureMobile from '@/assets/img/stockeld-brochure-mobile-2x.png';

import stockeldAdDesktop from '@/assets/img/stockeld-ad-desktop-2x.png';
import stockeldAdMobile from '@/assets/img/stockeld-ad-mobile-2x.png';

const overlayText = ref(null);
const container = ref(null);
let ctx;

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      gsap.from('.animate-aframe img', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.animate-aframe',
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
      <h1>Stockheld Dreamery</h1>
      <h2>Sales & Marketing Collateral</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroStockeldDreameryDesktop"
      :mobile="heroStockeldDreameryMobile"
      alt="Stockeld Dreamery"
      className="full-width"
    />

    <ContentBlock>
      <p>
        I have had the exciting responsibility of crafting the visual identity
        that represents Stockeld Dreamery Cream Cheese across multiple
        platforms. Whether it’s designing eye-catching point-of-sale materials
        and signage for various accounts, creating engaging social media posts,
        or developing informative brochures and sales sheets, my mission was to
        ensure that Stockeld Dreamery stands out in the competitive marketplace.
        Through compelling design, I aimed to not only capture the essence of
        the brand but also convey its unique qualities to their customers,
        partners, and audience, helping Stockeld Dreamery leave a lasting
        impression in the minds of consumers.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="stockeldAframeDesktop"
      :mobile="stockeldAframeMobile"
      alt=""
      className="mb-lg animate-aframe"
    >
      <div class="overlay-content" ref="overlayText">
        <h2>
          THE NEW CHEESE<br />
          IN TOWN
        </h2>
      </div>
    </ImageBlock>

    <section class="projects">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="stockeldBagelAdDesktop"
            :mobile="stockeldBagelAdMobile"
            alt=""
            className="mb-20 span-2 bagel-custom-sizing"
          />
          <ImageInline
            :desktop="stockeldFlyerDesktop"
            :mobile="stockeldFlyerMobile"
            alt=""
            className="mb-20 flyer-custom-sizing"
          />
        </div>
      </div>
    </section>

    <ImageBlock
      :desktop="stockeldBrochureDesktop"
      :mobile="stockeldBrochureMobile"
      alt="Stockeld Dreamery Brochure"
      className="full-width mb-20"
    />

    <ImageBlock
      :desktop="stockeldAdDesktop"
      :mobile="stockeldAdMobile"
      alt="Stockeld Dreamery Ad"
      className="mw-1300 mb-20"
    />

    <NextProject link="/work/midjourney" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
:deep(.bagel-custom-sizing) {
  width: 100%;
  max-height: 500px;
  img {
    max-height: 500px;
    width: 100%;
  }
}
:deep(.flyer-custom-sizing) {
  width: 100%;
  height: 100%;
  max-height: 500px;
  img {
    height: 100%;
  }
}

.animate-aframe {
  // padding-top: 160px; // Balanced padding to allow text to peek out without a massive gap
  :deep(picture) {
    position: relative;
    z-index: 10;
    img {
      // padding-top: 200px;
      padding-top: 160px;
      max-width: 800px;
      margin: 0 auto;
      display: block;
    }
  }
  .overlay-content {
    position: absolute;
    // top: clamp(-238px, calc(-4.2vw - 7rem), -7rem);
    top: 0;

    /* 
       Synced to Font Size Multiplier (1.4x) to lift the text higher:
       5rem * 1.4 = 7rem | (3vw + 5rem) * 1.4 = 4.2vw + 7rem | 170px * 1.4 = 238px
    */
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    z-index: -1;

    h2 {
      font-size: clamp(5rem, calc(3vw + 5rem), 170px);
      font-weight: 700;
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  @media (max-width: 870px) {
    .overlay-content {
      h2 {
        font-size: 11vw;
      }
    }
  }

  @media (max-width: $breakpoint-sm) {
    padding-top: 50px;

    :deep(picture) {
      img {
        padding-top: 50px;
        max-width: 100%;
      }
    }
  }

  @media (max-width: $breakpoint-xs) {
    padding-top: 80px;
    .overlay-content {
      top: -14vw;
      h2 {
        max-width: 350px;
        text-align: center;
        font-size: 56px;
        br {
          display: none;
        }
      }
    }
    :deep(picture) {
      img {
        padding-top: 45px;
      }
    }
  }

  @media (max-width: $breakpoint-xxs) {
    .overlay-content {
      h2 {
        font-size: 52px;
      }
    }
  }
}
</style>
