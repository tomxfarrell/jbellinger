<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroCentexHomesDesktop from '@/assets/img/hero-centex-homes-desktop-2x.png';
import heroCentexHomesMobile from '@/assets/img/hero-centex-homes-mobile-2x.png';

import centexHomesBlocksDesktop from '@/assets/img/centex-homes-blocks-desktop-2x.png';
import centexHomesBlocksMobile from '@/assets/img/centex-homes-blocks-desktop-2x.png';

import centexHomesAdDesktop from '@/assets/img/centex-homes-ad-desktop-2x.png';
import centexHomesAdMobile from '@/assets/img/centex-homes-ad-mobile-2x.png';

import centexHomesAd2Desktop from '@/assets/img/centex-homes-ad2-desktop-2x.png';
import centexHomesAd2Mobile from '@/assets/img/centex-homes-ad2-mobile-2x.png';

import centexHomesAd3Desktop from '@/assets/img/centex-homes-ad3-desktop-2x.png';
import centexHomesAd3Mobile from '@/assets/img/centex-homes-ad3-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Centex Homes</h1>
      <h2>Adulthood Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroCentexHomesDesktop"
      :mobile="heroCentexHomesMobile"
      alt="Centex Homes"
      className="full-width"
    />

    <ContentBlock>
      <p>
        Centex Homes sought a fresh, new campaign for their 55+ adult
        communities, so I crafted a playful, joy-filled experience using bold,
        full-bleed photography and a catchy headline, "Adulthood Has Its
        Privileges," to capture consumer attention. This was a super fun project
        to work on, with the campaign spanning a variety of media, from
        half-page newspaper ads and billboards along the NJ Turnpike to banners,
        social media posts, and everything in between.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="centexHomesBlocksDesktop"
      :mobile="centexHomesBlocksMobile"
      alt="Centex Homes"
      className="full-width mb-20"
    />

    <ImageBlock
      :desktop="centexHomesAdDesktop"
      :mobile="centexHomesAdMobile"
      alt="Centex Homes Ad"
      className="mw-1300 mb-20"
    />

    <ImageBlock
      :desktop="centexHomesAd2Desktop"
      :mobile="centexHomesAd2Mobile"
      alt="Centex Homes Ad"
      className="mw-1300 mb-20"
    />

    <ImageBlock
      :desktop="centexHomesAd3Desktop"
      :mobile="centexHomesAd3Mobile"
      alt="Centex Homes Ad"
      className="full-width mb-20"
    />

    <NextProject link="/work/the-setai" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
