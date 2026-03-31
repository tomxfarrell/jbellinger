<script setup>
import HeadlineBlock from '@/components/HeadlineBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import HeroBlock from '@/components/HeroBlock.vue';

import ImageBlock from '@/components/ImageBlock.vue';
import ImageInline from '@/components/ImageInline.vue';
import NextProject from '@/components/NextProject.vue';

import heroCentexHomesDesktop from '@/assets/img/hero-centex-homes-desktop-2x.png';
// import heroCentexHomesMobile from '@/assets/img/hero-centex-homes-mobile-2x.png';

import gameOfThronesFacadeDesktop from '@/assets/img/game-of-thrones-exterior-facade-desktop-2x.png';
import gameOfThronesFacadeMobile from '@/assets/img/game-of-thrones-exterior-facade-mobile-2x.png';

import gameOfThronesBannerDesktop from '@/assets/img/game-of-thrones-banner-desktop-2x.png';
import gameOfThronesBannerMobile from '@/assets/img/game-of-thrones-banner-mobile-2x.png';

import gameOfThronesFlagDesktop from '@/assets/img/game-of-thrones-flag-desktop-2x.png';
import gameOfThronesFlagMobile from '@/assets/img/game-of-thrones-flag-mobile-2x.png';

import gameOfThronesTableDesktop from '@/assets/img/game-of-thrones-table-desktop-2x.png';
import gameOfThronesTableMobile from '@/assets/img/game-of-thrones-table-mobile-2x.png';

import gameOfThronesPosterDesktop from '@/assets/img/game-of-thrones-poster-desktop-2x.png';
import gameOfThronesPosterMobile from '@/assets/img/game-of-thrones-poster-mobile-2x.png';

import gameOfThronesThroneDesktop from '@/assets/img/game-of-thrones-throne-desktop-2x.png';
import gameOfThronesThroneMobile from '@/assets/img/game-of-thrones-throne-mobile-2x.png';

import gameOfThronesDJDesktop from '@/assets/img/game-of-thrones-dj-desktop-2x.png';
import gameOfThronesDJMobile from '@/assets/img/game-of-thrones-dj-mobile-2x.png';

import gameOfThronesBoothDesktop from '@/assets/img/game-of-thrones-booth-desktop-2x.png';
import gameOfThronesBoothMobile from '@/assets/img/game-of-thrones-booth-mobile-2x.png';
import gameOfThronesCardDesktop from '@/assets/img/game-of-thrones-card-desktop-2x.png';
import gameOfThronesCardMobile from '@/assets/img/game-of-thrones-card-mobile-2x.png';
import gameOfThronesShowcaseDesktop from '@/assets/img/game-of-thrones-showcase-desktop-2x.png';
import gameOfThronesShowcaseMobile from '@/assets/img/game-of-thrones-showcase-mobile-2x.png';

import gameOfThronesCastDesktop from '@/assets/img/game-of-thrones-cast-desktop-2x.png';
import gameOfThronesCastMobile from '@/assets/img/game-of-thrones-cast-mobile-2x.png';
import gameOfThronesCast2Desktop from '@/assets/img/game-of-thrones-cast2-desktop-2x.png';
import gameOfThronesCast2Mobile from '@/assets/img/game-of-thrones-cast2-mobile-2x.png';
import gameOfThronesCast3Desktop from '@/assets/img/game-of-thrones-cast3-desktop-2x.png';
import gameOfThronesCast3Mobile from '@/assets/img/game-of-thrones-cast3-mobile-2x.png';
</script>

<template>
  <div class="work-page">
    <HeadlineBlock>
      <h1>Centex Homes</h1>
      <h2>Adulthood Campaign</h2>
    </HeadlineBlock>

    <HeroBlock
      :desktop="heroCentexHomesDesktop"
      :mobile="heroCentexHomesDesktop"
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
      :desktop="gameOfThronesFacadeDesktop"
      :mobile="gameOfThronesFacadeMobile"
      alt="Exterior Facade"
      className="mw-1300 mb-20"
    />

    <ContentBlock className="text-center large-container">
      <h2 class="mb-20">
        Designing for your favorite show? It doesn’t get better than this.
      </h2>
      <p>
        <strong>This is what fuels me—what ignites my passion</strong> for
        design and pushes me to create at the highest level. Being part of
        something so globally beloved, a phenomenon that millions eagerly
        anticipate week after week, was nothing short of a dream come true. Game
        of Thrones wasn’t just a show; it was an experience, a cultural moment,
        a world people lost themselves in—including myself. To bring that world
        to life through design, and crafting an immersive space that let fans
        step into Westeros, was an honor and a challenge I’ll never forget.
      </p>
    </ContentBlock>

    <section class="projects">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="gameOfThronesBannerDesktop"
            :mobile="gameOfThronesBannerMobile"
            alt=""
            className="span-2"
          />
          <ImageInline
            :desktop="gameOfThronesFlagDesktop"
            :mobile="gameOfThronesFlagMobile"
            alt=""
            className=""
          />

          <ImageInline
            :desktop="gameOfThronesTableDesktop"
            :mobile="gameOfThronesTableMobile"
            alt=""
            className="mb-lg"
          />

          <ImageInline
            :desktop="gameOfThronesPosterDesktop"
            :mobile="gameOfThronesPosterMobile"
            alt=""
            className="mb-lg"
          />

          <ImageInline
            :desktop="gameOfThronesThroneDesktop"
            :mobile="gameOfThronesThroneMobile"
            alt=""
            className="mb-lg"
          />
        </div>
      </div>
    </section>

    <ContentBlock className="text-center large-container with-line">
      <h3>
        A journey through the Seven Kingdoms, the Game of Thrones Exhibition
        Global Tour: Unveiled in New York, conquering Austin, Mexico City, Rio
        de Janeiro, Oslo, Toronto and Sydney
      </h3>
    </ContentBlock>

    <section class="projects">
      <div class="container">
        <div class="work-single-grid">
          <ImageInline
            :desktop="gameOfThronesDJDesktop"
            :mobile="gameOfThronesDJMobile"
            alt=""
            className="span-3"
          />
          <ImageInline
            :desktop="gameOfThronesBoothDesktop"
            :mobile="gameOfThronesBoothMobile"
            alt=""
            className="span-2"
          />
          <ImageInline
            :desktop="gameOfThronesCardDesktop"
            :mobile="gameOfThronesCardMobile"
            alt=""
            className=""
          />
          <ImageInline
            :desktop="gameOfThronesShowcaseDesktop"
            :mobile="gameOfThronesShowcaseMobile"
            alt=""
            className="span-3"
          />
          <ImageInline
            :desktop="gameOfThronesCast3Desktop"
            :mobile="gameOfThronesCast3Mobile"
            alt=""
            className=""
          />

          <ImageInline
            :desktop="gameOfThronesCastDesktop"
            :mobile="gameOfThronesCastMobile"
            alt=""
            className=""
          />

          <ImageInline
            :desktop="gameOfThronesCast2Desktop"
            :mobile="gameOfThronesCast2Mobile"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>

    <NextProject link="/work/dos-equis" />
  </div>
</template>

<style lang="scss" src="@/styles/_workSingleGrid.scss"></style>
