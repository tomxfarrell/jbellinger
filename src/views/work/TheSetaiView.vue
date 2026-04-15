<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroVideoBlock from '@/components/HeroVideoBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroTheSetaiDesktop from '@/assets/video/hero-video-setai-desktop.mp4';
import heroTheSetaiMobile from '@/assets/video/hero-video-setai-desktop.mp4';

import theSetaiMagazineDesktop from '@/assets/img/the-setai-magazine-desktop-2x.png';
import theSetaiMagazineMobile from '@/assets/img/the-setai-magazine-mobile-2x.png';

import theSetaiBrochureDesktop from '@/assets/img/the-setai-brochure-desktop-2x.png';
import theSetaiBrochureMobile from '@/assets/img/the-setai-brochure-mobile-2x.png';
import theSetaiBrochure2Desktop from '@/assets/img/the-setai-brochure-2-desktop-2x.png';
import theSetaiBrochure2Mobile from '@/assets/img/the-setai-brochure-2-mobile-2x.png';
import theSetaiLogo from '@/assets/img/the-setai-logo-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>The Setai</h1>
      <h2>Brochure & Campaign</h2>
    </HeadlineBlock>

    <HeroVideoBlock
      :desktop="heroTheSetaiDesktop"
      :mobile="heroTheSetaiMobile"
      alt="The Setai"
      className="hero-video-setai full-width"
    >
      <img :src="theSetaiLogo" alt="The Setai logo" />
    </HeroVideoBlock>

    <ContentBlock>
      <p>
        The brand also needed a sophisticated brochure that would speak to each
        buyer’s high-end sensibilities. With that in mind, I designed a
        hard-cover, perfect bound brochure that lays inside a traditional
        Japanese-red colored box, captivating the senses and promising an
        experience as exquisite as the destination it represents.
      </p>
      <p>
        The Setai is an intimate, serene, Asian-inspired luxury resort, spa and
        condos in the heart of South Beach and New York City. To bring the
        resort to life I designed this campaign that merges the breathtaking
        skylines of each city with the soul of the brand.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="theSetaiMagazineDesktop"
      :mobile="theSetaiMagazineMobile"
      alt="The Setai Magazine"
      className="full-width mb-20"
    />

    <ImageBlock
      :desktop="theSetaiBrochureDesktop"
      :mobile="theSetaiBrochureMobile"
      alt="The Setai Brochure"
      className="mw-1300 mb-20"
    />

    <ImageBlock
      :desktop="theSetaiBrochure2Desktop"
      :mobile="theSetaiBrochure2Mobile"
      alt="The Setai Brochure"
      className="mw-1300 mb-20"
    />

    <NextProject link="/work/banana-republic" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.hero-video-setai {
  position: relative;
  max-height: 453px;
  overflow-y: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(150px, 40vw, 331px);
  }
}
</style>
