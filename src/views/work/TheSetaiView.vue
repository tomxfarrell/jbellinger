<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import NextProject from '@/components/NextProject.vue';

import heroGameOfThronesDesktop from '@/assets/img/hero-game-of-thrones-desktop-2x.png';
import heroGameOfThronesMobile from '@/assets/img/hero-game-of-thrones-mobile-2x.png';

import gameOfThronesFacadeDesktop from '@/assets/img/game-of-thrones-exterior-facade-desktop-2x.png';
import gameOfThronesFacadeMobile from '@/assets/img/game-of-thrones-exterior-facade-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>The Setai</h1>
      <h2>Brochure & Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroGameOfThronesDesktop"
      :mobile="heroGameOfThronesMobile"
      alt="The Setai"
      className="full-width"
    />

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
      :desktop="gameOfThronesFacadeDesktop"
      :mobile="gameOfThronesFacadeMobile"
      alt="Exterior Facade"
      className="mw-1300 mb-20"
    />

    <NextProject link="/work/banana-republic" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
