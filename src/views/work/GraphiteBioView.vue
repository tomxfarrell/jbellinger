<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroGraphiteBioDesktop from '@/assets/img/hero-graphite-bio-desktop-2x.png';
import heroGraphiteBioMobile from '@/assets/img/hero-graphite-bio-mobile-2x.png';

import graphiteBioLaptopDesktop from '@/assets/img/graphite-bio-laptop-desktop-2x.png';
import graphiteBioHomepageDesktop from '@/assets/img/graphite-bio-homepage-desktop-2x.png';

import graphiteBioPipelineDesktop from '@/assets/img/graphite-bio-pipeline-desktop-2x.png';

import graphiteBioSliderDesktop from '@/assets/img/graphite-bio-slider-desktop-2x.png';

import graphiteBioScienceDesktop from '@/assets/img/graphite-bio-science-desktop-2x.png';

import gameOfThronesFacadeDesktop from '@/assets/img/game-of-thrones-exterior-facade-desktop-2x.png';
import gameOfThronesFacadeMobile from '@/assets/img/game-of-thrones-exterior-facade-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Graphite Bio</h1>
      <h2>Corporate Website</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroGraphiteBioDesktop"
      :mobile="heroGraphiteBioMobile"
      alt="Graphite Bio"
      className="full-width"
    />

    <ContentBlock>
      <p>
        As the Art Director and Designer entrusted with the vision of Graphite
        Bio’s corporate website, my responsibilities were multifaceted and
        central to crafting an online presence that mirrors the company’s
        innovative spirit. I was the creative visionary, shaping the website’s
        aesthetics and user experience to align seamlessly with Graphite Bio’s
        identity. My role involved translating complex scientific concepts into
        visually engaging content, ensuring that our audience, from industry
        experts to the general public, can easily comprehend the groundbreaking
        work they undertake.
      </p>
    </ContentBlock>

    <div class="screenshot-backdrop">
      <ImageBlock
        :desktop="graphiteBioLaptopDesktop"
        :mobile="graphiteBioLaptopDesktop"
        alt="Graphite Bio Laptop"
        className="mw-1300 mb-lg"
      />

      <ImageBlock
        :desktop="graphiteBioHomepageDesktop"
        :mobile="graphiteBioHomepageDesktop"
        alt="Graphite Bio Homepage"
        className="mw-1300 mb-20"
      />

      <ImageBlock
        :desktop="graphiteBioPipelineDesktop"
        :mobile="graphiteBioPipelineDesktop"
        alt="Graphite Bio Pipeline"
        className="mw-1300"
      />
    </div>

    <ImageBlock
      :desktop="graphiteBioSliderDesktop"
      :mobile="graphiteBioSliderDesktop"
      alt="Graphite Bio Slider"
      className="graphite-bio-slider full-width"
    />

    <div class="screenshot-backdrop backdrop-short">
      <ImageBlock
        :desktop="graphiteBioScienceDesktop"
        :mobile="graphiteBioScienceDesktop"
        alt="Graphite Bio Science"
        className="mw-1300 mb-20"
      />
    </div>

    <NextProject link="/work/elit-pristine-water-series" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>

<style lang="scss" scoped>
.screenshot-backdrop {
  background-color: #eaeef7;
  padding: 60px 40px 0 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  :deep(img) {
    max-width: 952px;
    margin: 0 auto;
  }
  &.backdrop-short {
    background: linear-gradient(to bottom, #eaeef7 80%, white 80%);
  }
}
.graphite-bio-slider {
  max-width: 100%;
  margin-top: -2rem;
  margin-bottom: -2rem;
  @media (max-width: $breakpoint-sm) {
    margin-top: -30px;
    margin-bottom: -50px;
  }
  @media (max-width: $breakpoint-xs) {
    margin-top: -10px;
  }
}
</style>
