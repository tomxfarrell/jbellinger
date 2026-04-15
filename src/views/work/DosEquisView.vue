<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroDosEquisDesktop from '@/assets/img/hero-dos-equis-desktop-2x.png';
import heroDosEquisMobile from '@/assets/img/hero-dos-equis-mobile-2x.png';

import dosEquisFlagDesktop from '@/assets/img/dos-equis-flag-desktop-2x.png';
import dosEquisFlagMobile from '@/assets/img/dos-equis-flag-mobile-2x.png';

import dosEquisHighboyDesktop from '@/assets/img/dos-equis-highboy-desktop-2x.png';
import dosEquisHighboyMobile from '@/assets/img/dos-equis-highboy-mobile-2x.png';

import dosEquisMGDesktop from '@/assets/img/dos-equis-mg-desktop-2x.png';
import dosEquisMGMobile from '@/assets/img/dos-equis-mg-mobile-2x.png';

import dosEquisReggieDesktop from '@/assets/img/dos-equis-reggie-desktop-2x.png';
import dosEquisReggieMobile from '@/assets/img/dos-equis-reggie-mobile-2x.png';

import dosEquisBannerDesktop from '@/assets/img/dos-equis-banner-desktop-2x.png';
import dosEquisBannerMobile from '@/assets/img/dos-equis-banner-mobile-2x.png';

import dosEquisGlorifierDesktop from '@/assets/img/dos-equis-glorifier-desktop-2x.png';
import dosEquisGlorifierMobile from '@/assets/img/dos-equis-glorifier-mobile-2x.png';

import dosEquisGlorifier2Desktop from '@/assets/img/dos-equis-glorifier2-desktop-2x.png';
import dosEquisGlorifier2Mobile from '@/assets/img/dos-equis-glorifier2-mobile-2x.png';

import dosEquisPillowDesktop from '@/assets/img/dos-equis-pillow-desktop-2x.png';
import dosEquisPillowMobile from '@/assets/img/dos-equis-pillow-mobile-2x.png';

import dosEquisDJBoothDesktop from '@/assets/img/dos-equis-dj-booth-desktop-2x.png';
import dosEquisDJBoothMobile from '@/assets/img/dos-equis-dj-booth-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Dos Equis</h1>
      <h2>Masquerade & Parade</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroDosEquisDesktop"
      :mobile="heroDosEquisMobile"
      alt="Dos Equis"
      className="full-width"
    />

    <ContentBlock>
      <p>
        I helped Dos Equis make Halloween so much more. With a Dos Equis Parade
        and Masquerade touring the country (San Francisco, San Diego, Las Vegas,
        Atlanta), we needed a look that would engage consumers and retailers to
        join the party and ensure a smash success. I designed a microsite and
        evites to gain attendance, and everything from masked mannequin highboys
        and parade flags, to bottle glorifiers for the events themselves.
      </p>
      <p>
        Thanks to the successful execution of the campaign, Dos Equis achieved a
        significant increase in attendance at their events, as well as
        heightened engagement with both consumers and retailers. I was able to
        capture the essence of the brand’s unique value proposition and create
        an immersive experience which allowed Dos Equis to stand out in a
        crowded market and connect with their target audience in a meaningful
        way. Overall, the Dos Equis Parade and Masquerade campaign demonstrates
        the power of creative and engaging marketing initiatives to drive
        results and elevate a brand’s image.
      </p>
    </ContentBlock>

    <ImageBlock
      :desktop="dosEquisFlagDesktop"
      :mobile="dosEquisFlagMobile"
      alt="Dos Equis Flag"
      className="full-width mb-20"
    />

    <section class="projects mb-20">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="dosEquisHighboyDesktop"
            :mobile="dosEquisHighboyMobile"
            alt=""
            className=""
          />
          <ImageInline
            :desktop="dosEquisMGDesktop"
            :mobile="dosEquisMGMobile"
            alt=""
            className=""
          />

          <ImageInline
            :desktop="dosEquisReggieDesktop"
            :mobile="dosEquisReggieMobile"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>

    <ImageBlock
      :desktop="dosEquisBannerDesktop"
      :mobile="dosEquisBannerMobile"
      alt=""
      className="mw-1300"
    />

    <ImageBlock
      :desktop="dosEquisGlorifierDesktop"
      :mobile="dosEquisGlorifierMobile"
      alt="Dos Equis Glorifier"
      className="mw-1300 mb-20"
    />

    <section class="projects mb-20">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="dosEquisGlorifier2Desktop"
            :mobile="dosEquisGlorifier2Mobile"
            alt=""
            className="span-2"
          />
          <ImageInline
            :desktop="dosEquisPillowDesktop"
            :mobile="dosEquisPillowMobile"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>

    <ImageBlock
      :desktop="dosEquisDJBoothDesktop"
      :mobile="dosEquisDJBoothMobile"
      alt=""
      className="mw-1300"
    />

    <NextProject link="/work/versace" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
