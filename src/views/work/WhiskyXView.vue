<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroBlock from '@/components/HeroBlock.vue';
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroWhiskyXDesktop from '@/assets/img/hero-whisky-x-desktop-2x.png';
import heroWhiskyXMobile from '@/assets/img/hero-whisky-x-mobile-2x.png';

import whiskyBannersDesktop from '@/assets/img/whisky-banners-desktop-2x.png';
import whiskyBannersMobile from '@/assets/img/whisky-banners-mobile-2x.png';

import whiskyScreensDesktop from '@/assets/img/whisky-screens-desktop-2x.png';
import whiskyScreensMobile from '@/assets/img/whisky-screens-mobile-2x.png';

import whiskyMagazineDesktop from '@/assets/img/whisky-magazine-desktop-2x.png';
import whiskyMagazineMobile from '@/assets/img/whisky-magazine-mobile-2x.png';

import whiskyCarDesktop from '@/assets/img/whisky-car-desktop-2x.png';
import whiskyCarMobile from '@/assets/img/whisky-car-mobile-2x.png';

import whiskyAlabamaDesktop from '@/assets/img/whisky-alabama-desktop-2x.png';

import whiskyBottleDesktop from '@/assets/img/whisky-bottle-desktop-2x.png';
import whiskyBottleAlabamaTextDesktop from '@/assets/img/whisky-alabama-text-desktop-2x.png';

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const whiskyAlabamaTextRef = ref(null);
let ctx; // For GSAP context cleanup

onMounted(() => {
  nextTick(() => {
    ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isMobile } = context.conditions;

          if (whiskyAlabamaTextRef.value) {
            gsap.from(whiskyAlabamaTextRef.value, {
              x: isMobile ? 100 : 300,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: '.whisky-bottle-animation',
                start: 'top bottom',
                end: 'bottom center',
                scrub: true,
              },
            });
          }
        }
      );
    }, container.value); // Scoped to this component
  });
});

onUnmounted(() => {
  ctx?.revert(); // Clean up GSAP context
  ScrollTrigger.refresh(); // Recalculate global scroll markers immediately
});
</script>

<template>
  <div class="work-page" ref="container">
    <HeadlineBlock>
      <h1>The WhiskyX</h1>
      <h2>Web & Digital Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroWhiskyXDesktop"
      :mobile="heroWhiskyXMobile"
      alt="The Whisky X"
      className="full-width"
    />

    <ContentBlock>
      <p>
        The WhiskyX stands as the pinnacle of whisky events. This extraordinary
        experience introduces attendees to over 60 premium whisky brands sourced
        globally, inviting them to indulge in a sensory adventure, exploring the
        intricate nuances of various whisky varieties. As the creative director
        shaping The WhiskyX’s essence from its inception, I played a central
        role in defining the event’s identity. From conceptualizing the design
        and developing the website to crafting all advertising materials, I
        meticulously curated every detail. This included not only their website
        but also captivating web banners, engaging emails, compelling
        presentations that resonates with the spirit of innovation, quality, and
        celebration within the whisky community. It was a journey of creativity
        and passion, ensuring that every facet of The WhiskyX reflected the
        vibrant essence of the whisky world.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="whiskyBannersDesktop"
      :mobile="whiskyBannersMobile"
      alt=""
      className="full-width"
    />

    <ImageBlock
      :desktop="whiskyScreensDesktop"
      :mobile="whiskyScreensMobile"
      alt=""
      className="mw-1440"
    />

    <ImageBlock
      :desktop="whiskyAlabamaDesktop"
      :mobile="whiskyAlabamaDesktop"
      alt=""
      className="mw-1440 whisky-bottle-animation"
    >
      <img
        :src="whiskyBottleAlabamaTextDesktop"
        alt="ALABAMA"
        class="whisky-alabama-text"
        ref="whiskyAlabamaTextRef"
      />
      <img
        :src="whiskyBottleDesktop"
        alt="Whisky Bottle"
        class="whisky-bottle"
      />
    </ImageBlock>

    <ImageBlock
      :desktop="whiskyMagazineDesktop"
      :mobile="whiskyMagazineMobile"
      alt="Whisky Magazine"
      className="full-width"
    />

    <ImageBlock
      :desktop="whiskyCarDesktop"
      :mobile="whiskyCarMobile"
      alt="Whisky Car"
      className="mw-1300"
    />

    <NextProject link="/work/budweiser" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.whisky-bottle-animation {
  position: relative;
  overflow: hidden;
}
.whisky-alabama-text {
  position: absolute;
  width: clamp(300px, 50vw, 952px);
  left: 0;
  right: -500px;
  bottom: clamp(200px, 60vw, 864px);
  margin: 0 auto;
  z-index: 1;
}
.whisky-bottle {
  width: clamp(100px, 15vw, 200px);
  position: absolute;
  left: 0;
  right: -500px;
  bottom: clamp(150px, 45vw, 600px);
  margin: 0 auto;
  z-index: 2;
}

@media (max-width: $breakpoint-sm) {
  .whisky-bottle {
    width: clamp(80px, 12vw, 160px);
    right: -200px;
    bottom: clamp(
      150px,
      48vw,
      500px
    ); /* Adjusted to bring the bottle up higher */
  }
  .whisky-alabama-text {
    width: clamp(200px, 40vw, 500px);
    right: -100px;
    bottom: clamp(180px, 70vw, 600px);
  }
}
</style>
