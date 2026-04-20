<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroJeepDesktop from '@/assets/img/hero-jeep-desktop-2x.png';
import heroJeepMobile from '@/assets/img/hero-jeep-mobile-2x.png';

import jeepRedDesktop from '@/assets/img/jeep-red-desktop-2x.png';
import jeepRedMobile from '@/assets/img/jeep-red-mobile-2x.png';

import jeepWomenDesktop from '@/assets/img/jeep-women-desktop-2x.png';
import jeepWomenMobile from '@/assets/img/jeep-women-mobile-2x.png';

import jeepManDesktop from '@/assets/img/jeep-man-desktop-2x.png';
import jeepManMobile from '@/assets/img/jeep-man-mobile-2x.png';

import jeepWomanDesktop from '@/assets/img/jeep-woman-desktop-2x.png';
import jeepWomanMobile from '@/assets/img/jeep-woman-mobile-2x.png';

import jeepMan2Desktop from '@/assets/img/jeep-man2-desktop-2x.png';
import jeepMan2Mobile from '@/assets/img/jeep-man2-mobile-2x.png';

import jeepDJDesktop from '@/assets/img/jeep-dj-desktop-2x.png';
import jeepDJMobile from '@/assets/img/jeep-dj-mobile-2x.png';

import jeepRed2Desktop from '@/assets/img/jeep-red2-desktop-2x.png';
import jeepRed2Mobile from '@/assets/img/jeep-red2-mobile-2x.png';

import jeepBleachersDesktop from '@/assets/img/jeep-bleachers-desktop-2x.png';
import jeepBleachersMobile from '@/assets/img/jeep-bleachers-mobile-2x.png';

const overlayText = ref(null);
const container = ref(null);
let ctx;

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      // Dramatic parallax effect for the Jeep image
      gsap.from('.animate-jeep-red img', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.animate-jeep-red',
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
  <div class="work-page" ref="container">
    <HeadlineBlock>
      <h1>Jeep</h1>
      <h2>USA Basketball</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroJeepDesktop"
      :mobile="heroJeepMobile"
      alt="Jeep"
      className="full-width"
    />

    <ContentBlock>
      <p>
        Jeep and USA Basketball announced their partnership, which named the
        Jeep Wrangler the “Official Vehicle of USA Basketball.” To celebrate
        Team USA’s quest for Gold, I designed billboard-sized graphics, the
        Wrangler-Grill DJ booth concept (you know you want one),
        basketball-themed photo-ops with an Olympic podium, and more.
      </p>
      <p>
        The kickoff party in LA featured Kim Kardashian, Chris Paul, rapper
        Common and DJ Biz Markie. From there, the event traveled to New York’s
        Flatiron Plaza hosted by New York Knicks All-Star and USA Basketball
        team member Carmelo Anthony and basketball Legend Allan Houston.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="jeepRedDesktop"
      :mobile="jeepRedMobile"
      alt=""
      className="full-width mb-lg animate-jeep-red"
    >
      <div class="overlay-content" ref="overlayText">
        <h2>
          FROM BLACKTOP<br />
          TO PODIUM
        </h2>
      </div>
    </ImageBlock>

    <ContentBlock>
      <h2 class="like-h3 with-line text-center">
        A legendary vehicle supporting a legendary team.
      </h2>
    </ContentBlock>

    <section class="projects">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="jeepWomenDesktop"
            :mobile="jeepWomenMobile"
            alt=""
            className="span-2"
          />
          <ImageInline
            :desktop="jeepManDesktop"
            :mobile="jeepManMobile"
            alt=""
            className=""
          />
          <ImageInline
            :desktop="jeepWomanDesktop"
            :mobile="jeepWomanMobile"
            alt=""
            className="mb-xs"
          />
          <ImageInline
            :desktop="jeepMan2Desktop"
            :mobile="jeepMan2Mobile"
            alt=""
            className="span-2 mb-xs"
          />
        </div>
      </div>
    </section>

    <ImageBlock
      :desktop="jeepDJDesktop"
      :mobile="jeepDJMobile"
      alt=""
      className="full-width"
    />

    <ImageBlock
      :desktop="jeepRed2Desktop"
      :mobile="jeepRed2Mobile"
      alt=""
      className="full-width"
    />

    <ImageBlock
      :desktop="jeepBleachersDesktop"
      :mobile="jeepBleachersMobile"
      alt=""
      className="full-width"
    />

    <NextProject link="/work/magenta-therapeutics" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.animate-jeep-red {
  // padding-top: 160px; // Balanced padding to allow text to peek out without a massive gap
  :deep(picture) {
    position: relative;
    z-index: 10;
    img {
      // padding-top: 200px;
      padding-top: 120px;
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
        padding-top: 0;
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
